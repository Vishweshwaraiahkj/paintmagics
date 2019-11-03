const express = require("express");
const homeController = require("../controllers/homeControler");

// Import Auth Verify Token middleware
const verifyToken = require("../middlewares/jwt-auth");

const router = express.Router();

router.get("/", homeController.HomeController);

router.get("/api", homeController.ApiController);

module.exports = router;
