import React, { Component } from "react";
import "./Exercise.css";

export default function Login(props) {
  return (
    <div className="main-container">
      <p className="date-text">{props.date}</p>
      <p className="main-text">
        <b>Exercise:</b>
        {props.exerciseName}
      </p>
      <p className="main-text">
        <b>Reps:</b>
        {props.reps}
      </p>
      <p className="main-text">
        <b>Sets:</b>
        {props.sets}
      </p>
      <p className="main-text">
        <b>Weight: </b>
        {props.weight} lbs
      </p>
      <p className="main-text">
        <b>Muscles: </b>
        {props.muscleGroup}
      </p>
    </div>
  );
}
