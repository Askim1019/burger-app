// Import mysql node library
const mysql = require('mysql');
const keys = require('../keys.js');

// Create the connection function with config objects passed in
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: keys.mysqlkey.secret,
  database: "burgers_db"
});

// Call the connection function to make connection
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;