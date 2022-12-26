import React, { Component, createContext } from "react";
import "./WorkHist.css";
import axios from "axios";

// exports.logWorkout = (req, res) => {
//   const workout = new Workout({
//     user: req.body.user,
//     date: req.body.date,
//     exerciseName: req.body.exerciseName,
//     sets: req.body.sets,
//     reps: req.body.reps,
//     //rpe: req.body.rpe,
//     weight: req.body.weight,
//     muscleGroup: req.body.muscleGroup,
//     workoutCategory: req.body.muscleCategory,
//   });

const getPlan = (event) => {
  const res = axios
    .post("http://localhost:8080/api/test/getplan", {
      Difficulty: "Easy",
    })
    .then((response) => {
      console.log("Success!");
      console.log(response.data.message);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
      }
    });
};

const addWorkout = (event) => {
  const res = axios
    .post("http://localhost:8080/api/test/logWorkout", {
      user: "Test User",
      date: "Test Date",
      exerciseName: "Test Exercise",
      sets: 0,
      reps: 0,
      weight: 0,
      muscleGroup: "Test MG",
      workoutCategory: "Test Category",
    })
    .then((response) => {
      console.log("Success!");
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
      }
    });
};

export default function WorkHist() {
  return (
    <div>
      <div className="topnav">
        <a href="http://localhost:3000/Homepage">Home</a>
        <a>Stats</a>
        <a>Plan</a>
        <a className="active" href="http://localhost:3000/WorkHist">
          Activity History
        </a>
      </div>
      <div className="flex-main-wh">
        <button onClick={addWorkout}>Test Add Workout</button>
        <button onClick={getPlan}>Test Template Query</button>
      </div>
    </div>
  );
}
