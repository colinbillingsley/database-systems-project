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

  // method to approve an event
  static async approveEvent(event_id, callback) {
    const query = 'UPDATE RSO_Events SET approved = 2 WHERE event_id = ?'
    connection.query(query, [event_id], (error, result) => {
      if (error) {
        console.error('Error finding RSO Event', error);
        return callback(error);
      }
      callback(null, result);
    })
  }

  // method to deny an event
  static async denyEvent(event_id, callback) {
    const query = 'UPDATE RSO_Events SET approved = 0 WHERE event_id = ?'
    connection.query(query, [event_id], (error, result) => {
      if (error) {
        console.error('Error finding RSO Event', error);
        return callback(error);
      }
      callback(null, result);
    })
  }
}

module.exports = RsoEvent;
