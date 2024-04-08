const connection = require('../db');

class RsoEvent {
  constructor(event_id, owned_by) {
    this.event_id = event_id;
    this.owned_by = owned_by;
  }

  static async add(event_id, owned_by, callback) {
    const query = `INSERT INTO RSO_Events (event_id, owned_by) VALUES (?, ?)`;
    connection.query(query, [event_id, owned_by], (error, result) => {
      if (error) {
        console.error('Error inserting event into RSO_Events:', error);
        return callback(error);
      }
      callback(null, result.insertId);
      });
  }
}

module.exports = RsoEvent;
