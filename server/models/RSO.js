const connection = require('../db');

class RSO {
    constructor(uni_id, name, createdBy, type, desc, email, number, status) {
        this.uni_id = uni_id;
        this.name = name;
        this.createdBy = createdBy;
        this.type = type;
        this.desc = desc;
        this.email = email;
        this.number = number;
        this.status = status;
    }

    static create(uni_id, name, created_by, type, desc, email, number, status, callback) {
        const query = 'INSERT INTO RSO (uni_id, name, created_by, type, `desc`, email, number, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query(query, [uni_id, name, created_by, type, desc, email, number, status], (error, results) => {
            if (error) {
                console.error('Error creating RSO:', error);
                return callback(error);
            }
            callback(null, results.insertId);
        });
    }

    // Method to join an RSO
    static joinRSO(rsoId, userId, callback) {
        const query = 'INSERT INTO RSO_Users_Joined (rso_id, uid) VALUES (?, ?)';
        connection.query(query, [rsoId, userId], (error, results) => {
            if (error) {
                console.error('Error joining RSO:', error);
                return callback(error);
            }
            callback(null, results.insertId);
        });
    }

    // Method to leave RSO
    static leaveRSO(rsoId, userId, callback) {
        const query = 'DELETE FROM RSO_Users_Joined WHERE rso_id = ? AND uid = ?';
        connection.query(query, [rsoId, userId], (error, result) => {
            if (error) {
                console.error('Error leaving RSO:', error);
                return callback(error);
            }
            callback(null, result);
        });
    }

    // Method to retrieve all RSOs in a specific university
    static getAllByUniversity(universityId, callback) {
        const query = `SELECT * FROM RSO where uni_id = ? && approved = 2`;
        connection.query(query, [universityId], (error, results) => {
            if (error) {
                 console.error('Error fetching RSOs by university ID:', error);
                return callback(error);
            }
            callback(null, results);
        });
    }

    // Method to retrieve all RSOs in a specific university
    static getRSOs(callback) {
        const query = 'SELECT * FROM RSO';
        connection.query(query, (error, results) => {
            if (error) {
                 console.error('Error fetching RSOs:', error);
                return callback(error);
            }
            callback(null, results);
        });
    }


    // Method to find an RSO by ID
    static findById(rsoId, callback) {
        const query = 'SELECT * FROM RSO WHERE rso_id = ?';
        connection.query(query, [rsoId], (error, results) => {
            if (error) {
                console.error('Error finding RSO by ID:', error);
                return callback(error);
            }
            if (results.length === 0) {
                return callback(null, null); // RSO not found
            }
            const rso = results[0];
            callback(null, rso);
        });
    }

    // Method to find an RSO by name
    static findByName(name, callback) {
        const query = 'SELECT * FROM RSO WHERE name = ?';
        connection.query(query, [name], (error, results) => {
            if (error) {
                console.error('Error finding RSO by name:', error);
                return callback(error);
            }
            if (results.length === 0) {
                return callback(null, null); // RSO not found
            }
            const rso = results[0];
            callback(null, rso);
        });
    }

    // Method to check and see if the user has already joined the RSO
    static determineUserJoinedRSO(rso_id, uid, callback) {
        const query = 'SELECT * FROM RSO_Users_Joined WHERE rso_id = ? AND uid = ?';
        connection.query(query, [rso_id, uid], (error, results) => {
            if (error) {
                console.error('Error finding rso with user:', error);
                return callback(error);
            }
            if (results.length === 0) {
                return callback(null, null); // nothing found
            }
            const userJoinedRSO = results[0];
            callback(null, userJoinedRSO);
        })
    }

    // Method to get the username from the uid
    static getRsoMembers(rso_id, callback) {
        const query = 'SELECT uid FROM RSO_Users_Joined WHERE rso_id = ?'
        connection.query(query, [rso_id], (error, results) => {
            if (error) {
                console.error('Error finding memebers of RSO:', error);
                return callback(error);
            }

            if (results.length === 0) {
                return callback(null, null); // nothing found
            }

            const members = results;
            callback(null, members);
        })
    }

    // method to get all rso's a user is part of 
    static getRSOsByUserId(userId, callback) {
        const query = `
            SELECT RSO.*
            FROM RSO
            INNER JOIN RSO_Users_Joined ON RSO.rso_id = RSO_Users_Joined.rso_id
            WHERE RSO_Users_Joined.uid = ? && RSO.approved = 2
        `;
        connection.query(query, [userId], (error, results) => {
            if (error) {
                console.error('Error fetching RSOs by user ID:', error);
                return callback(error);
            }
            callback(null, results);
        });
    }

    // Method to get RSO creations for super admin to approve/deny
   static async getRsoRequests(uni_id, callback) {
    const query = 'SELECT * FROM RSO WHERE approved = 1 AND uni_id = ?';
    connection.query(query, [uni_id], (error, results) => {
        if (error) {
            console.error('Error finding RSOs:', error);
            return callback(error);
        }
        if (results.length === 0) {
            return callback(null, null); // no rso requests
        }
        callback(null, results);
    })
   }

     // method to approve a RSO
  static async approveRSO(rso_id, callback) {
    const query = 'UPDATE RSO SET approved = 2 WHERE rso_id = ?'
    connection.query(query, [rso_id], (error, result) => {
      if (error) {
        console.error('Error finding RSO', error);
        return callback(error);
      }
      callback(null, result);
    })
  }

  // method to deny a RSO
  static async denyRSO(rso_id, callback) {
    const query = 'UPDATE RSO SET approved = 0 WHERE rso_id = ?'
    connection.query(query, [rso_id], (error, result) => {
      if (error) {
        console.error('Error finding RSO', error);
        return callback(error);
      }
      callback(null, result);
    })
  }

  // method to delete an RSO
  static async deleteRSO(rso_id, callback) {
    const query = 'DELETE FROM RSO WHERE rso_id = ?';
    connection.query(query, [rso_id], (error, result) => {
        if (error) {
            console.error('Error deleting RSO', error);
            return callback(error);
          }
          callback(null, result);
    })
  }

}

module.exports = RSO;
