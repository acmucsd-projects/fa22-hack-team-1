const mongoose = require("mongoose");

var histSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  exerciseName: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  muscleGroup: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("hist", histSchema, "workout history");
