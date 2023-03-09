const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'noor.2654',
  database: 'gym',
  connectionLimit: 10
});

module.exports = pool;
