const db = require('../db');

class PublicEvent {
  static async findByEventId(eventId) {
    return db.query(
      `SELECT * FROM Public_Events WHERE event_id = ?`,
      [eventId]
    )
    .then(([row]) => row[0])
    .catch(err => console.log(err));
  }

  static async findByCreatedBy(createdBy) {
    return db.query(
      `SELECT * FROM Public_Events WHERE created_by = ?`,
      [createdBy]
    )
    .then(([row]) => row)
    .catch(err => console.log(err));
  }

  static async add(event) {
    const { event_id, created_by } = event;
    return db.query(
      `INSERT INTO Public_Events (event_id, created_by) VALUES (?, ?)`,
      [event_id, created_by]
    )
    .then(() => event_id)
    .catch(err => {
      console.log(err);
      throw err;
    });
  }
}

module.exports = PublicEvent;
