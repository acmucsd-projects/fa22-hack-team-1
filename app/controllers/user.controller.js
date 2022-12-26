const db = require("../models");
const Plans = db.plan;
const User = db.user;
const Role = db.role;
const Workout = db.workout;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.updatePassword = (req, res) => {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    user.password = bcrypt.hashSync(req.body.password, 8);
    user.save();
  });

  res.send({ message: "Password updated!" });
};

exports.logWorkout = (req, res) => {
  const workout = new Workout({
    user: req.body.user,
    date: req.body.date,
    exerciseName: req.body.exerciseName,
    sets: req.body.sets,
    reps: req.body.reps,
    //rpe: req.body.rpe,
    weight: req.body.weight,
    muscleGroup: req.body.muscleGroup,
    workoutCategory: req.body.muscleCategory,
  });

  workout.save((err, workout) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.send({ message: "Workout logged." });
    }
  });

  exports.updateWeight = (req, res) => {
    User.findOne({
      username: req.body.username,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      user.weight = req.body.weight;
      user.save();
    });

    res.send({ message: "Stats updated!" });
  };

  exports.updateHeight = (req, res) => {
    User.findOne({
      username: req.body.username,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      user.height = req.body.height;
      user.save();
    });

    res.send({ message: "Stats updated!" });
  };
};

exports.getPlan = (req, res) => {
  Plans.findOne({ Difficulty: req.body.Difficulty }, function (err, docs) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.send({ message: docs.Exercises });
    }
  });
};
