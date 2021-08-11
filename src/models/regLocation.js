const mongoose = require("mongoose");
const timeStamp = require("../utils/timestamp.js");

var timeStampData = timeStamp;

const Schema = mongoose.Schema;

const regOtpSchema = new Schema({
  email: {
    required: true,
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Object,
    default: timeStampData,
  },
  updatedAt: {
    type: Object,
    default: timeStampData,
  },
});

module.exports = mongoose.model("RegOtps", regOtpSchema);
