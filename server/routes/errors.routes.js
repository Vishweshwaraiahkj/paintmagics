const express = require("express");

const app = express();

// error handling routes goes here
// 404 not found error
const error404 = (req, res, next) => {
  let err = new Error("Page not found!");
  err.status = 404;
  next(err);
};

// 500 internal server error
const error500 = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
};

module.exports = {
  error404,
  error500
};
