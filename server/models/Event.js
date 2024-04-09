// Import the database connection
const connection = require('../db');

class Event {
    constructor(event_id, time, desc, location_name, date, category, event_host, event_phone, event_email, event_type, event_name, longitude, latitude) {
        this.event_id = event_id;
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
    static create(time, desc, location_name, date, category, event_host, event_phone, event_email, event_type, event_name, longitude, latitude, callback) {
        
        const query = 'INSERT INTO Events (`time`, `desc`, location_name, `date`, category, event_host, event_phone, event_email, event_type, event_name, longitude, latitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query(query, [time, desc, location_name, date, category, event_host, event_phone, event_email, event_type, event_name, longitude, latitude], (error, results) => {
            if (error) {
                console.error('Error creating event:', error);
                return callback(error);
            }
    
            callback(null, results.insertId);
        });
    }

// Method to retrieve all events specific to a university (when event is not public)
static getAll(universityId, callback) {
    const query = `
        SELECT * 
        FROM Events 
        WHERE university_id = ? AND is_public = 0;
    `;
    connection.query(query, [universityId], (error, results) => {
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

    static async getEventRequests(callback) {
        const query = `SELECT E.* 
        FROM Events E, RSO_Events R
            WHERE R.event_id = E.event_id
                AND R.approved = 1;`
        connection.query(query, (error, results) => {
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
}

// Export the Event model
module.exports = Event;
