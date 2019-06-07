const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  fcfname: { type: String, required: true },
  fclname: { type: String, required: true },
  fdate: { type: String, required: true },
  fperspective: { type: String, required: true },
  ftype: { type: String, required: true },
  fpcategory: { type: String, required: false },
  fmessage: { type: String, required: true }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
