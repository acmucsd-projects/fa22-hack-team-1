import React, { Component } from "react";
import "./Exercise.css";

export default function Login(props) {
  return (
    <div className="primary-container">
      <br />
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
      <br />
    </div>
  );
}
