const jwt = require("jsonwebtoken");

// Verify Token
const verifyToken = (req, res, next) => {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  console.log("Token is: " + bearerHeader);

  if (typeof bearerHeader !== "undefined") {
    // split at spaces
    const bearer = bearerHeader.split(" ");
    // get the token from array
    const bearerToken = bearer[1];
    // set the token
    req.token = bearerToken;
    // next middleware

    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.user = authData;
      }
    });

    next();
  } else {
    // Forbidden
    res.sendStatus(401);
  }
};

module.exports = verifyToken;
