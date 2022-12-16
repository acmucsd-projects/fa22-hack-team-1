const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        force: {
            type: String,
            required: false,
        },
        level: {
            type: String,
            required: false,
        },
        mechanic: {
            type: String,
            required: false,
        },
        equipment: {
            type: String,
            required: false,
        },
        primaryMuscles: {
            type: String,
            required: false,
        },
        secondaryMuscles: {
            type: String,
            required: false,
        },
        instructions: {
            type: String,
            required: false,
        },
        category: {
            type: String,
            required: false,
        },
        //to be recorded for workout history
        sets: {
            type: Number,
            required: false,
        },
        //array of length(sets) where reps[0] is reps for first set, etc.
        reps: {
            type: Array,
            required: false,
        },
        //rate of perceived exertion
        rpe: {
            type: Number,
            required: false,
        }
    }
)
module.exports = mongoose.model('exercise.model', exerciseSchema, 'exercises');