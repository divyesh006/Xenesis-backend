const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  events: {
    type: Array,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  enrollment_number: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
  },
  course: {
    type: String,
  },
  college: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
