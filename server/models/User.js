//const db = require('../db');

// Model for Users table
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  
  // Method to create a new user
  static create(username, password, callback) {
    const query = 'INSERT INTO Users (username, password) VALUES (?, ?)';
    connection.query(query, [username, password], (error, results) => {
      if (error) {
        console.error('Error creating user:', error);
        return callback(error);
      }
      callback(null, results.insertId); // Return the ID of the newly inserted user
    });
  }

  // Method to find a user by username
  static findByUsername(username, callback) {
    const query = 'SELECT * FROM Users WHERE username = ?';
    connection.query(query, [username], (error, results) => {
      if (error) {
        console.error('Error finding user by username:', error);
        return callback(error);
      }
      if (results.length === 0) {
        return callback(null, null); // User not found
      }
      const user = results[0]; // Assuming username is unique
      callback(null, user);
    });
  }

  // You can add more methods for updating, deleting, fetching users, etc.
}

// Export the User model
module.exports = User;
