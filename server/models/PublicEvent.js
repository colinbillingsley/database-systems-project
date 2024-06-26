const connection = require('../db');

class PublicEvent {
  constructor(event_id, created_by) {
    this.event_id = event_id;
    this.created_by = created_by;
  }

  static async findByEventId(eventId) {
    return connection.query(
      `SELECT * FROM Public_Events WHERE event_id = ?`,
      [eventId]
    )
    .then(([row]) => row[0])
    .catch(err => console.log(err));
  }

  static async findByCreatedBy(createdBy) {
    return connection.query(
      `SELECT * FROM Public_Events WHERE created_by = ?`,
      [createdBy]
    )
    .then(([row]) => row)
    .catch(err => console.log(err));
  }

  // Method to insert event into Public_Events table
  static async add(event_id, created_by, callback) {
    const query = `INSERT INTO Public_Events (event_id, created_by) VALUES (?, ?)`;
    connection.query(query, [event_id, created_by], (error, result) => {
      if (error) {
        console.error('Error inserting event into Public_Events:', error);
        return callback(error);
      }
      callback(null, result.insertId);
      });
  }
}

module.exports = PublicEvent;
