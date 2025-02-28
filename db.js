// Get the client
import mysql from "mysql2/promise";
// const mysql = require("mysql2");

//  sử dụng pool thay vì connection để giảm tải cho database

// Create the connection to database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "node44",
  port: 3307,
});

export default pool;
