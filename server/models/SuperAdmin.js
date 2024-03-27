const db = require('../db');
const User = require('./User');

class SuperAdmin {
  static async create(username, password, callback) {
    try {
      // First, create a user in the Users table
      const userId = await User.create(username, password);

      // Then, create a SuperAdmin entry in the SuperAdmins table
      const query = 'INSERT INTO SuperAdmins (uid) VALUES (?)';
      db.query(query, [userId], (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.insertId); // Return the ID of the newly inserted super admin
      });
    } catch (error) {
      callback(error);
    }
  }
}

module.exports = SuperAdmin;
