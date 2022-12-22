const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./userData");
db.role = require("./role.model");
db.workout = require("./completedWorkouts");
db.plan = require("./plans");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
