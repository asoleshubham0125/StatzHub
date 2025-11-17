const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = { OrdersSchema };
