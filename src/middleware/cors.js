var express = require("express");
var cors = require("cors");
const { successMsg, errorMsg } = require("../utils");
var app = express();

const corsOrigin = async (req, res, next) => {
  var whitelist = ["https://example1.com", "http://example2.com"];
  let origin = req.header("Origin");
  
  try {
    if (!whitelist.indexOf(origin) !== -1 || !origin) {
      next();
    } else {
      return res.status(500).send(errorMsg(502));
    }
  } catch (e) {
    return res.status(500).send(errorMsg(e));
  }
};

module.exports = corsOrigin;
