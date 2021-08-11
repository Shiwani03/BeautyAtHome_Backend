const mongoose = require("mongoose");
const defaultConfig = require('../config/defaultConfig')

const Schema = mongoose.Schema;

const regOtpSchema = new Schema({
  email: {
    required: true,
    type: String,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: defaultConfig[defaultConfig.env].optTime,
    default: Date.now,
  },
});

module.exports = mongoose.model("RegOtps", regOtpSchema);
