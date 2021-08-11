const express = require("express");
const corsOrigin = require("../middleware/cors");
const controllerObj = require("../controllers");
const router = new express.Router();

router.post("/email_varification", async (req, res) => {
  const action = "email_verification";
  controllerObj.controller(req, res, action);
});

router.post("/register_user", async (req, res) => {
  const action = "register_user";
  controllerObj.controller(req, res, action);
});

router.post("/login", async (req, res) => {
  const action = "login_user";
  controllerObj.controller(req, res, action);
});

router.get("/refresh_token", async (req, res) => {
  const action = "refresh_token";
  controllerObj.controller(req, res, action);
});

router.post("/check_username", async (req, res) => {
  const action = "verify_username";
  controllerObj.controller(req, res, action);
});

module.exports = router;
