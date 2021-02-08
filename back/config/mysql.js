require("dotenv").config();
const connection = require("mysql2");

const pool = connection.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, 
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const mysql = pool.promise();

module.exports = { mysql };
