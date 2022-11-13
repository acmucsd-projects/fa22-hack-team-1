const db = require("../models");
const User = db.user;
const Role = db.role;

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
      username: req.body.username
    }) 
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      user.password = bcrypt.hashSync(req.body.password, 8)
      user.save();
    });

    res.send({ message: "Password updated!" });
  };