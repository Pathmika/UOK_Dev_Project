const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orderDate: { type: String, required: true },
  oissueDate: { type: String, required: true },
  oPlants: { type: Array, required: true },
  ototAmount: { type: Number, required: true },
  ototDiscount: { type: Number, required: true },
  oCustomerId: { type: String, required: true }
  // pimage: { type: String, required: true }
});

module.exports = mongoose.model("Order", orderSchema);
