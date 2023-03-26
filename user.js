const pool = require('./db');
const bcrypt = require('bcrypt');

const User = {};

User.create = async function(user) {
  const sql = 'INSERT INTO members (first_name, last_name, email, phone_number) VALUES (?, ?, ?, ?)';
  const values = [user.first_name, user.last_name, user.email, user.phone];
  const [result] = await pool.execute(sql, values);
  
  const sql2 = 'INSERT INTO login_info (email, password) VALUES (?, ?)';
  const values2 = [user.email, user.password];
  const [result2] = await pool.execute(sql2, values2);

  return result.insertId;
};

User.findByEmail = async function(email) {
  const sql = 'SELECT * FROM login_info WHERE email = ?';
  const [rows] = await pool.execute(sql, [email]);
  return rows[0];
};

User.getDetails = async function(email){
  const sql = 'SELECT * FROM members WHERE email = ?';
  const [rows] = await pool.execute(sql, [email]);
  return rows[0];
}

module.exports = User;
