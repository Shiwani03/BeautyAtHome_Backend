const mongoose = require("mongoose");
const { errorCode } = require("../config/codeConfig");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    }
  },
  { timestamps: true }
);
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
