const mysql = require('mysql');

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'eventdb.cpi0iouyqh2w.us-east-1.rds.amazonaws.com', // AWS RDS endpoint
  port: 3306, // Port
  user: 'admin', // Username
  password: 'pineapple', // Password
  database: 'eventdb'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Export the connection for use in other modules
module.exports = connection;

