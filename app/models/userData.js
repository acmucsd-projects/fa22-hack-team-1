const mongoose = require('mongoose');

var userDataSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: false,
        },
        last_name: {
            type: String,
            required: false,
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
            required: false,
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
            required: false,
        },
        roles: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Role"
            }
          ],
        history: {
            type: Array,
            required: false,
        }
    }
)

module.exports = mongoose.model('userData', userDataSchema, 'User Data');
