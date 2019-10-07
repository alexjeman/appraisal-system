const mongoose = require("mongoose");

const AppraisalSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  evalperiod: {
    type: String,
    default: "annual"
  },
  position: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  teamleader: {
    type: String,
    required: true
  },
  achieved: {
    type: String
  },
  goals: {
    type: String
  },
  wishlist: {
    type: String
  },
  swot: {
    type: String
  },
  feedback: {
    type: String
  },
  tlfeedback: {
    type: String
  },
  type: {
    type: String,
    default: "personal"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("appraisal", AppraisalSchema);