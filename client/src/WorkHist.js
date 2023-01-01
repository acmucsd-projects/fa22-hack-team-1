import React, { Component, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./WorkHist.css";
import axios from "axios";

export default function WorkHist() {
  const { state } = useLocation();
  const { username } = state;
  const navigate = useNavigate();

  const getPlan = (event) => {
    const res = axios
      .post("http://localhost:8080/api/test/getplan", {
        Difficulty: "Easy",
      })
      .then((response) => {
        console.log("Success!");
        console.log(response.data.message[0].LowerSplit);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };

  const getHist = (event) => {
    const res = axios
      .post("http://localhost:8080/api/test/getHist", {
        user: "a",
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

  const home = () => {
    navigate("../Homepage", {
      state: { username: username },
    });
  };

  return (
    <div>
      <div className="topnav">
        <a onClick={home}>Home</a>
        <a>Stats</a>
        <a>Plan</a>
        <a className="active">Activity History</a>
      </div>
      <div className="flex-main-wh">
        <button onClick={addWorkout}>Test Add Workout</button>
        <button onClick={getPlan}>Test Template Query</button>
        <button onClick={getHist}>Test Hist Query</button>
      </div>
    </div>
  );
}
