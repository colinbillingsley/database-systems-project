const connection = require('../db');

class University {
  constructor(uni_name, desc, location, NOstudents, domain) {
    this.uni_name = uni_name;
    this.desc = desc;
    this.location = location;
    this.NOstudents = NOstudents;
    this.domain = domain;
  }

  // method to create a university
  static async create(uni_name, desc, location, NOstudents, domain, callback) {
    const query = 'INSERT INTO Universities (uni_name, `desc`, location, NOstudents, domain) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [uni_name, desc, location, NOstudents, domain], (error, results) => {
      if (error) {
        console.error('Error creating university:', error);
        return callback(error);
      }
      callback(null, results);
    });
  }

  // method to get all universities
  static async getAll(callback) {
    const query = 'SELECT * FROM Universities';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error getting universities:', error);
        return callback(error);
      }
      callback(null, results);
    });
  }


  // method to get a single university
  static async getUniByName(uni_name, callback) {
    const query = 'SELECT uni_id FROM Universities WHERE uni_name = ?';
    connection.query(query, [uni_name], (error, result) => {
      if (error) {
        console.error('Error getting university:', error);
        return callback(error);
      }
      callback(null, result[0]);
    });
  }

}

module.exports = University;
