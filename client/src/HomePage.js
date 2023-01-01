import React, { Component, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomePage.css";
import axios from "axios";

/**
 *
 * STATS PAGE IDEAS:
 *
 * 1. Display a graph of the user's progress over time
 * 2. Display a graph of the user's progress over time for each muscle group
 *
 */

export default function HomePage() {
  const { state } = useLocation();
  const { username } = state;
  const navigate = useNavigate();

  const whist = () => {
    navigate("../WorkHist", {
      state: { username: username },
    });
  };

  const getResponse = (event) => {
    const res = axios
      .post("http://localhost:8080/api/auth/signin", {
        username: event.target.username.value,
      })
      .then((response) => {
        return username;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };

  /**
   * Stats page deprecated
   */

  return (
    <div>
      <div className="topnav">
        <a className="active">Home</a>
        <a>Stats</a>
        <a>Plan</a>
        <a onClick={whist}>Activity History</a>
      </div>
      <div className="flex-main-home">
        <div className="flex-left-home">
          <h4 className="WorkoutTitle">Today's Workout </h4>
          <h1 className="SplitDay">Upper Body</h1>
          <p>Chest: Exercise(s) 1</p>
          <p>Back: Exercise(s) 2</p>
          <p>Shoulders: Exercise(s) 3</p>
          <p>Triceps: Exercise(s) 4</p>
          <p>Biceps: Exercise(s) 5</p>
        </div>
        <div className="flex-right-home">
          <p className="WorkoutTitle"> Activity Tracker</p>
        </div>
      </div>
    </div>
  );
}
