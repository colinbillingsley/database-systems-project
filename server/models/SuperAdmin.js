const db = require('../db');
const User = require('./User');

// Model for SuperAdmins table
class SuperAdmin {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // Method to add a new super admin
  static async add(newSuperAdmin) {
    const {
      username,
      password
    } = newSuperAdmin;
    /*
    try {
      // Insert user into Users table
      const result = await db.query('INSERT INTO Users (username, password) VALUES (?, ?)', [username, password]);
      
      // Retrieve the auto-generated UID from the insert result
      const uid = result.insertId;

      // Insert user's UID into SuperAdmins table
      await db.query('INSERT INTO SuperAdmins (uid) VALUES (?)', [uid]);

      return { success: true };
    } catch (error) {
      console.error('Error adding super admin:', error);
      throw error;
    }*/
  }

  // add additional methods 
}

// Export the SuperAdmin model
module.exports = SuperAdmin;
