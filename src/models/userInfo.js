const mongoose = require("mongoose");
const { errorCode } = require("../config/codeConfig");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    // user_name: {
    //   type: String,
    //   trim: true,
    //   unique: true
    // },
    user_type: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      minlength: 7,
      trim: true,
    },
    images: Array,
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
