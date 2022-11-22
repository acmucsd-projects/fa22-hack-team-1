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
    }
)
module.exports = mongoose.model('exercise.model', exerciseSchema, 'exercises');