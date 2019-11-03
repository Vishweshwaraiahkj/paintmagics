const jwt = require("jsonwebtoken");
const pool = require("../middlewares/db-connect");
const bcrypt = require("bcrypt");

const signIn = (req, res) => {
  // Mock user
  const user = {
    id: 1,
    firstName: "Vishu",
    lastName: "Kj",
    email: "k.vishu@outlook.com"
  };

  jwt.sign({ user }, "secretkey", { expiresIn: "3000s" }, (err, token) => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        token
      });
    }
  });
};

const getProfile = (req, res) => {
  // fetches all messages of given user
  const message = "Welcome to user profile!";
  res.json(message);
};

const getUser = (user = null, callback) => {
  //if user is a number then id or if string then username
  if (user) {
    const field = Number.isInteger(user) ? "id" : firstName;
  }

  let sql = `SELECT * FROM users WHERE ${field} = ?`;

  pool.query(sql, user, (err, res) => {
    if (err) throw err;
    callback(res);
  });
};

const createUser = () => {};

module.exports = {
  signIn,
  getProfile
};
