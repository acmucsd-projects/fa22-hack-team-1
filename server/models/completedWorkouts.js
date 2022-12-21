const mongoose = require ('mongoose');

var completedWorkoutSchema = new mongoose.Schema ({
  date: String,
  time: String,
  exerciseName: String,
  sets: Number,
  reps: Number,
  rpe: Number,
  muscleGroup: String,
  workoutCategory: String,
});

var workoutSchema = new mongoose.Schema ({
  completedWorkout: [completedWorkoutSchema],
});

const workout = mongoose.model ('workout', Schema);

module.exports = workout;