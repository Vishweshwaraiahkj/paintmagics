const express = require("express");
const userController = require("../controllers/userController");

// Import Auth Verify Token middleware
const verifyToken = require("../middlewares/jwt-auth");

const router = express.Router();

router.get("/signin", userController.signIn);

router.get("/profile", verifyToken, userController.getProfile);

module.exports = router;
