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

User.create_contact_details = async function(contact_form) {
  const sql = 'INSERT INTO contact (full_name, email, contact_subject, message) VALUES (?, ?, ?, ?)';
  const values = [contact_form.name,  contact_form.email, contact_form.subject, contact_form.message];
  const [result] = await pool.execute(sql, values);
  return result;
};

User.send_plan_query = async function(plan_query){
  const sql = 'INSERT INTO book_trial (email, first_name, last_name, phone_number, plan_query) VALUES (?, ?, ?, ?, ?)';
  const values = [plan_query.email,  plan_query.first_name, plan_query.last_name, plan_query.phone, plan_query.plan_type];
  const [result] = await pool.execute(sql, values);
  return result;
}

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
