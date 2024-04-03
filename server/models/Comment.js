const connection = require('../db');

class Comment {
    constructor(event_id, uid, text, rating, timestamp) {
        this.event_id = event_id;
        this.uid = uid;
        this. text = text;
        this.rating = rating;
        this.timestamp = timestamp;
    }

    // Method to create a comment
    static async create(event_id, uid, text, rating, timestamp) {
        const query = 'INSERT INTO Comments (event_id, uid, text, rating, timestamp) VALUES(?, ?, ?, ?, ?)';
        connection.query(query, [event_id, uid, text, rating, timestamp], (error, results) => {
            if (error) {
                console.error('Error creating comment:', error);
                return callback(error);
            }
            callback(null, results.insertId); // Return the ID of the newly inserted comment
        });
    }


    // Method to get all the comments associated with an event
    static async getComments(event_id) {
        const query = 'SELECT * FROM Comments WHERE event_id = ?';
        connection.query(query, [event_id], (error, results) => {
            if (error) {
                console.error('Error fetching comments:', error);
                return callback(error);
            }
            callback(null, results); // Return all comments
        });
    }
}