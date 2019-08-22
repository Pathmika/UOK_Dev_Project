const mongoose = require("mongoose");
const customerSchema = mongoose.Schema({
  userID: Number,
  firstname: String,
  lastname: String,
  address: String,
  nic: String,
  telephone: Number,
  email: String,
  blacklistStatus: String
});

module.exports = mongoose.model("Customer", customerSchema);
