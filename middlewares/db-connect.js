const mysql = require("mysql");
const dotenv = require("dotenv");
const util = require("util");

dotenv.config();

const dbhost = process.env.DB_HOST;
const dbuser = process.env.DB_USER;
const dbpass = process.env.DB_PASS;
const dbname = process.env.DB_NAME;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: dbhost,
  user: dbuser,
  password: dbpass,
  database: dbname
});

pool.getConnection((err, connection) => {
  if (err) {
    return err;
  } else {
    connection.release();
    return;
  }
});

pool.query = util.promisify(pool.query);

module.exports = pool;
