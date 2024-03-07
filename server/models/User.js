const connection = require('../db');

// Model for Users table
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
 
// Method to create a new user
static async create(username, password, callback) {
  // Check if the username already exists
  User.findByUsername(username, async (error, existingUser) => {
      if (error) {
          // Error occurred while checking for existing username
          return callback(error);
      }
      if (existingUser) {
          // Username already exists, reject the creation
          return callback({ message: 'Username already exists' });
      }
      
      // Proceed with creating the user if the username is unique
      const query = 'INSERT INTO Users (username, password) VALUES (?, ?)';
      connection.query(query, [username, password], (error, results) => {
          if (error) {
              console.error('User already exists', error);
              return callback(error);
          }
          callback(null, results.insertId); // Return the ID of the newly inserted user
      });
  });
}


  // Method to find a user by username
  static  async findByUsername(username, callback) {
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

 
}

// Export the User model
module.exports = User;
