// Import the database connection
const connection = require('../db');

class Event {
    constructor(event_id, uni_id, time, desc, location_name, date, category, event_host, event_phone, event_email, event_type, event_name, longitude, latitude) {
        this.event_id = event_id;
        this.uni_id = uni_id;
        this.time = time;
        this.desc = desc;
        this.location_name = location_name;
        this.date = date;
        this.category = category;
        this.event_host = event_host;
        this.event_phone = event_phone;
        this.event_email = event_email;
        this.event_type = event_type;
        this.event_name = event_name;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    // Method to create a new event
    static create(uni_id, time, desc, location_name, date, category, event_host, event_phone, event_email, event_type, event_name, longitude, latitude, callback) {
        
        const query = 'INSERT INTO Events (uni_id, `time`, `desc`, location_name, `date`, category, event_host, event_phone, event_email, event_type, event_name, longitude, latitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query(query, [uni_id, time, desc, location_name, date, category, event_host, event_phone, event_email, event_type, event_name, longitude, latitude], (error, results) => {
            if (error) {
                console.error('Error creating event:', error);
                return callback(error);
            }
    
            callback(null, results.insertId);
        });
    }

    // Method to retrieve all events specific to a university (when event is not public)
    static getAllByUniversity(universityId, callback) {
        const query = ` (
                        SELECT *
                        FROM Events
                        WHERE (uni_id = ? AND event_type = 'Private')
                        OR event_type = 'Public'
                        )
                        UNION
                        (
                            SELECT E.*
                            FROM Events E
                            JOIN RSO_Events R ON R.event_id = E.event_id
                            WHERE E.uni_id = ?
                            AND R.approved = 2
                        )
                        ORDER BY date;`;
        connection.query(query, [universityId, universityId], (error, results) => {
            if (error) {
                console.error('Error fetching events:', error);
                return callback(error);
            }
            callback(null, results); // Return events specific to the university
        });
    }

    // Method to retrieve all events
    static getEvents(callback) {
        const query = 'SELECT * FROM Events';
        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error fetching events:', error);
                return callback(error);
            }
            callback(null, results); // Return all events
        });
    }

    // Method to retrieve all RSO events that a user is a member of
    static getMyEvents(uid, callback) {
        const query = ` (SELECT E.*
                        FROM Events E
                        JOIN RSO_Events R ON R.event_id = E.event_id
                        JOIN RSO_Users_Joined RUJ ON RUJ.rso_id = R.owned_by
                        WHERE R.approved = 2 AND RUJ.uid = ?
                        )
                        ORDER BY date;`;
        connection.query(query, [uid], (error, results) => {
            if (error) {
                console.error('Error fetching events:', error);
                return callback(error);
            }
            callback(null, results); // Return events specific to user RSOs
        });
    }

    // Method to retrieve all accepted RSO evented created by user
    static getApprovalStatus(event_id, callback) {
        const query = `SELECT approved from RSO_Events where event_id = ?`;
        connection.query(query, [event_id], (error, results) => {
            if (error) {
                console.error('Error fetching events:', error);
                return callback(error);
            }
            callback(null, results[0]);
        });
    }

    // Method to retrieve all accepted RSO evented created by user
    static getMyApprovedCreatedEvents(uid, callback) {
        const query = ` SELECT E.*
                        FROM Events E
                        JOIN RSO_Events RE ON RE.event_id = E.event_id
                        JOIN RSO R ON R.rso_id = RE.owned_by
                        WHERE R.created_by = ?
                        AND RE.approved = 2;`;
        connection.query(query, [uid], (error, results) => {
            if (error) {
                console.error('Error fetching events:', error);
                return callback(error);
            }
            callback(null, results); // Return events specific to user RSOs
        });
    }

    // Method to retrieve all pending RSO evented created by user
    static getMyPendingCreatedEvents(uid, callback) {
        const query = ` SELECT E.*
                        FROM Events E
                        JOIN RSO_Events RE ON RE.event_id = E.event_id
                        JOIN RSO R ON R.rso_id = RE.owned_by
                        WHERE R.created_by = ?
                        AND RE.approved = 1;`;
        connection.query(query, [uid], (error, results) => {
            if (error) {
                console.error('Error fetching events:', error);
                return callback(error);
            }
            callback(null, results); // Return events specific to user RSOs
        });
    }

    // Method to retrieve all denied RSO evented created by user
    static getMyDeniedCreatedEvents(uid, callback) {
        const query = ` SELECT E.*
                        FROM Events E
                        JOIN RSO_Events RE ON RE.event_id = E.event_id
                        JOIN RSO R ON R.rso_id = RE.owned_by
                        WHERE R.created_by = ?
                        AND RE.approved = 0;`;
        connection.query(query, [uid], (error, results) => {
            if (error) {
                console.error('Error fetching events:', error);
                return callback(error);
            }
            callback(null, results); // Return events specific to user RSOs
        });
    }


    // Method to find an event by ID
    static findById(eventId, callback) {
        const query = 'SELECT * FROM Events WHERE event_id = ?';
        connection.query(query, [eventId], (error, results) => {
            if (error) {
                console.error('Error finding event by ID:', error);
                return callback(error);
            }
            if (results.length === 0) {
                return callback(null, null); // Event not found
            }
            const event = results[0];
            callback(null, event);
        });
    }

    // Method to get RSO event creations for super admin to approve/deny
    static async getEventRequests(uni_id, callback) {
        const query = `SELECT E.* 
        FROM Events E, RSO_Events R
            WHERE R.event_id = E.event_id
                AND E.uni_id = ?
                AND R.approved = 1;`
        connection.query(query, [uni_id], (error, results) => {
            if (error) {
                console.error('Error finding event requests:', error);
                return callback(error);
            }
            if (results.length === 0) {
                return callback(null, null); // no event requests
            }
            callback(null, results);
        })
    }

    // Method to see if an event occurs during a timeframe at a location already
    static async determineEventTimeTaken(time, date, location_name, longitude, latitude, callback) {
        const query = `SELECT COUNT(*)
        FROM Events WHERE (time = ? && date = ?) AND (location_name = ? && latitude = ? && longitude = ?)`;
        connection.query(query, [time, date, location_name, latitude, longitude], (error, result) => {
            if (error) {
                console.error('Error determining if event occurs at this place, on this date, at this time:', error);
                return callback(error);
            }
            const count = result[0]['COUNT(*)'];
            callback(null, count);
        })
    }
}

// Export the Event model
module.exports = Event;
