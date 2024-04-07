// Import the database connection
const connection = require('../db');

class Event {
    constructor(event_id, time, desc, location, date, category, event_host, event_phone, event_email, event_name) {
        this.event_id = event_id;
        this.time = time;
        this.desc = desc;
        this.location = location;
        this.date = date;
        this.category = category;
        this.event_host = event_host;
        this.event_phone = event_phone;
        this.event_email = event_email;
        this.event_name = event_name;
    }

    // Method to create a new event
    static create(time, desc, location, date, category, event_host, event_phone, event_email, event_name, callback) {
        
        const query = 'INSERT INTO Events (time, `desc`, location, date, category, event_host, event_phone, event_email, event_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query(query, [time, desc, location, date, category, event_host, event_phone, event_email, event_name], (error, results) => {
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
}

// Export the Event model
module.exports = Event;
