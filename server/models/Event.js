// Import the database connection
const connection = require('../db');

class Event {
    constructor(event_id, time, desc, location) {
        this.event_id = event_id;
        this.time = time;
        this.desc = desc;
        this.location = location;
    }

    // Method to create a new event
    static create(time, desc, location, callback) {
        const query = 'INSERT INTO Events (time, `desc`, location) VALUES (?, ?, ?)';
        connection.query(query, [time, desc, location], (error, results) => {
            if (error) {
                console.error('Error creating event:', error);
                return callback(error);
            }
            callback(null, results.insertId); // Return the ID of the newly inserted event
        });
    }

    // Method to retrieve all events
    static getAll(callback) {
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
}

// Export the Event model
module.exports = Event;
