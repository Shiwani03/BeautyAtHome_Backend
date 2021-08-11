const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  tokens: [
    {
      access_token: {
        type: String,
        required: true,
      },
      refresh_token: {
        type: String,
        required: true,
      },
    },
  ]
});

module.exports = mongoose.model("token", tokenSchema);
