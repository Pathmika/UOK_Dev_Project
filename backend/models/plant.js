const mongoose = require("mongoose");

const plantSchema = mongoose.Schema({
  pname: { type: String, required: true },
  pcategory: { type: String, required: true },
  pdescription: { type: String, required: true },
  punitPrice: { type: Number, required: true }
});

module.exports = mongoose.model("Plant", plantSchema);
