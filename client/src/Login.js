/**
 * ToDo:
 *
 *   Workout Log:
 *      In user database, store date that exercises are added to routine
 *      Display dates and workout name (other info?) on Workout History page
 *
 *   Workout Layout:
 *      (To be done at the end)
 *
 *      Sample Layout:
 *        Squat: 5 sets, 5 reps each set
 *        Bench Press: 5 sets, 5 reps each set
 *        Deadlift: 5 sets, 5 reps each set
 *
 *   Home Page:
 *      Things to visualize on the page:
 *        In-Progress Workout
 *        Personal Stats (Entered During Account Creation)
 *
 *   New Pages to Make:
 *      Start Workout Page
 *      Self-Report Workout Results Page
 *      Log of User Workout History
 *
 *  TODO: 12/10
 *    Ali: Working on beginner, medium, difficult workout templates, putting in database
 *    Evan: Working on displaying workout info for dummy values, waiting on Ali
 *
 *    Finalize Meeting Times
 *      Saturday at 4 pm
 *      Wednesday at 12 pm
 *
 */

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  useNavigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";
import "./Login.css";

import rec from "./images/rec.png";

export default function Login() {
  const navigate = useNavigate();

  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

  axios.defaults.withCredentials = false;

  const vplogin = (event) => {
    event.preventDefault();

    console.log("Username:", event.target.username.value);
    console.log("Password:", event.target.password.value);

    const res = axios
      .post("http://localhost:8080/api/auth/signin", {
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then((response) => {
        console.log("ACCESS TOKEN: ", response.data.accessToken);
        //Display different content for different access tokens

        //For default users
        navigate("../HomePage", {
          state: { username: event.target.username.value },
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };

  const cacc = () => {
    navigate("../CreateUser");
  };

  return (
    <div className="flex-main-login">
      <div className="flex-left-login">
        <img
          className="image-main"
          src={rec}
          alt="You'll Just Have to Imagine the Fire"
        />
      </div>
      <div className="flex-right-login">
        <h1 className="right-header"> Welcome to UCSD Gym Bros</h1>
        <form onSubmit={vplogin}>
          <label className="form-header" for="username">
            <b>Username or Email:</b>
          </label>
          <br />
          <input
            className="form-input"
            type="text"
            id="username"
            name="username"
          />
          <br />
          <br />
          <label className="form-header" for="password">
            <b>Password:</b>
          </label>
          <br />
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
          />
          <br />
          <p>
            <a className="forgot-pass" href="https://www.w3schools.com/">
              Forgot Password
            </a>
          </p>
          <br />
          <br />
          <button className="login-button" type="submit">
            Login
          </button>
          <input
            className="create-acc-button"
            type="button"
            value="Create Account"
            onClick={cacc}
          />
        </form>
      </div>
    </div>
  );
}
