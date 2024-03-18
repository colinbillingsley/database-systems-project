const connection = require('../db');

class RSO {
    constructor(name, createdBy) {
        this.name = name;
        this.createdBy = createdBy;
    }

    static create(name, createdBy, callback) {
        const query = 'INSERT INTO RSO (name, created_by) VALUES (?, ?)';
        connection.query(query, [name, createdBy], (error, results) => {
            if (error) {
                console.error('Error creating RSO:', error);
                return callback(error);
            }
            callback(null, results.insertId);
        });
    }

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
}

module.exports = RSO;
