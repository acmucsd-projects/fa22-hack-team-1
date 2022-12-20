import React, { Component, createContext } from "react";
import { useLocation } from "react-router-dom";
import "./homePage.css";
import axios from "axios";
export default function HomePage() {
  const { state } = useLocation();
  const { username } = state;

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

  return (
    <div>
      <div className="topnav">
        <a className="active">Home</a>
        <a>Stats</a>
        <a>Plans</a>
        <a>Account Settings</a>
      </div>
      <div className="flex-main1">
        <div className="flex-left1" >
          <h4 className = "WorkoutTitle" >Today's Workout </h4>
          <h1 className = "SplitDay">Upper Body</h1>
          <p>Chest: Exercise(s) 1</p>
          <p>Back: Exercise(s) 2</p>
          <p>Shoulders: Exercise(s) 3</p>
          <p>Triceps: Exercise(s) 4</p>
          <p>Biceps: Exercise(s) 5</p>
        </div>
        <div className="flex-right1">
          <p className = "WorkoutTitle"> Activity Tracker</p>
          
        </div>
      </div>
    </div>
  );
}
