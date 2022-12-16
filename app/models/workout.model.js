const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
    {
        date: {
            type: String,
            required: true,
        },
        exercises: {
            type: Array,
            required: true,
        } 
    }
)
module.exports = mongoose.model('workout.model', exerciseSchema, 'workouts');