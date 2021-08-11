const mongoose = require("mongoose");
const { errorCode } = require("../config/codeConfig");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      default: 'ordered'
    },
    userId: { type: mongoose.Schema.ObjectId, ref: "User" },
    categoryId: [{ type: mongoose.Schema.ObjectId, ref: "Category" }],
    count: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
