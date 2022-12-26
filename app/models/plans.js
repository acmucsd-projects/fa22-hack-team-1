const mongoose = require("mongoose");

var plansSchema = new mongoose.Schema({
  Difficulty: {
    type: String,
    required: true,
  },
  Exercises: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("plans", plansSchema, "exercise plans");
