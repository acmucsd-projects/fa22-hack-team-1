const mongoose = require('mongoose');

var userDataSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        height: {
            type: String,
            required: false,
        },
        weight: {
            type: Number,
            required: false,
        },
        birth_year: {
            type: Number,
            required: true,
        },
        roles: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Role"
            }
          ]
    }
)

module.exports = mongoose.model('userData', userDataSchema, 'User Data');