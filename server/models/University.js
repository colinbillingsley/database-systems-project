const connection = require('../db');

class University {
  constructor(desc, location, NOstudents, domain) {
    this.desc = desc;
    this.location = location;
    this.NOstudents = NOstudents;
    this.domain = domain;
  }

  static async create(desc, location, NOstudents, domain, callback) {
    const query = 'INSERT INTO universities (desc, location, NOstudents, domain) VALUES (?, ?, ?, ?)';
    connection.query(query, [desc, location, NOstudents, domain], (error, results) => {
      if (error) {
        console.error('Error creating university:', error);
        return callback(error);
      }
      callback(null, results.insertId);
    });
  }

  static async getAll(callback) {
    const query = 'SELECT * FROM universities';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error getting universities:', error);
        return callback(error);
      }
      callback(null, results);
    });
  }
}

module.exports = University;
