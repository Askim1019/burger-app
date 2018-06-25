const connection = require('../config/connection.js'); // Check to see if ('./connection.js'); works as well

// create question mark placeholder function for database queries
function printQuestionMarks(num) {
  let arr = [];
  
  for (let i = 0; i < num.length; i++) {
    arr.push("?");
  }
  
  return arr.toString(); // ["?", "?"] --> "?,?";
}

// Create a function to make key value in the update sql function parameter
function objToSql(ob) {
  let arr = [];
  
  for (let key in ob) {
    let value = ob[key];
    
    if (Object.hasOwnProperty.call(ob, key)) {
       // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if(typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `"${value}"`;
      }
      
      arr.push(`${key}=${value}`);
    }
  }
  // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
  // e.g. {sleepy: true} => ["sleepy=true"]

  return arr.toString();
}

const orm = {
  selectAll: (table, cb) => {
    let queryString = `SELECT * FROM ${table};`;
    
    console.log(queryString);
    
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      
      cb(result);
    });
  },
  
  insertOne: (table, columns, values, cb) => {
    let sqlColumns = columns.toString();
    let questionMarks = printQuestionMarks(values);
    let queryString = `INSERT INTO ${table} (${columns}) VALUES (${questionMarks});`;
    
    console.log(queryString);
    console.log(sqlColumns);
    console.log(questionMarks);
    
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      
      cb(result);
    });
  },
  
  updateOne: (table, objColVals, condition, cb) => {
    let changeColumns = objToSql(objColVals);
    let queryString = `UPDATE table SET ${changeColumns} WHERE condition;`;
    
    console.log(queryString);
    console.log(changeColumns);
    
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      
      cb(result);
    });
  }
  
};