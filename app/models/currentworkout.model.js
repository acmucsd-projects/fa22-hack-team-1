const mongoose = require("mongoose");

const completedWorkoutSchema = new mongoose.Schema({
  //username which completed the workout
  user: String,
  plan: String,
  //integer representing the current workout of the plan
  part: Number,
});

module.exports = mongoose.model(
  "currentworkout.model",
  completedWorkoutSchema,
  "current workouts"
);
