const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5001;

// Import Auth Verify Token middleware
const verifyToken = require("./middlewares/jwt-auth");

// Import routes
const homeRoute = require("./routes/home.routes");
app.use(homeRoute);

const userRoute = require("./routes/user.routes");
app.use(userRoute);

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Vishu", lastName: "Kj" },
    { id: 2, firstName: "Mahant", lastName: "Kj" },
    { id: 3, firstName: "Hema", lastName: "Vj" }
  ];

  res.json(customers);
});

const errorRoutes = require("./routes/errors.routes");
app.use(errorRoutes.error404);
app.use(errorRoutes.error500);

app.listen(port, () => console.log(`Server started at PORT ${port}`));
