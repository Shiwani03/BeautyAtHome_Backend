const express = require("express");
require("./db/mongoose");
const passport = require("passport");
var bodyParser = require("body-parser");
const router = require("./routers");
var cors = require("cors");
const { errorMsg } = require("./utils");

const app = express();
app.use(cors());

// cross domain session
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json.
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

try {
  app.use("/api", router.loginRouter);  
  app.use("/api", router.dashboardRouter);  
} catch (error) {
  return res.status(500).send(errorMsg(error))
}


//.............middleware for error handeling...................
app.use((req, res, next) => {
  next();
});
app.use((req, res, next) => {
  return res.status(404).send(errorMsg(503));
});

////////////////////////////////////////////////////////////////

module.exports = app;
