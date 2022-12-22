const mongoose = require ('mongoose');

var completedWorkoutSchema = new mongoose.Schema ({
  //username which completed the workout
  user: String,
  date: String,
  exerciseName: String,
  sets: Number,
  reps: Number,
  //rpe: Number,
  weight: Number,
  muscleGroup: String,
  workoutCategory: String,
  
});

// var workoutSchema = new mongoose.Schema ({
//   completedWorkout: [completedWorkoutSchema],
// });

module.exports = mongoose.model('completedWorkouts', completedWorkoutSchema, 'workout history')