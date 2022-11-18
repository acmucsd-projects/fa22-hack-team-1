import React, { Component } from "react";
import {
  BrowserRouter as Router,
  useNavigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./Login.css";
import HomePage from "./HomePage";

export default function Login() {
  const navigate = useNavigate();

  const vplogin = () => {
    //If user entered correct credentials
    console.log("Please");
    navigate("./HomePage");
  };

  return (
    <div className="flex-main">
      <div className="flex-left">
        <img
          className="image-main"
          src={require("./images/rec.png")}
          alt="You'll Just Have to Imagine the Fire"
        />
      </div>
      <div className="flex-right">
        <h1 className="right-header"> Welcome to UCSD Gym Bros</h1>
        <form>
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
          <input
            className="login-button"
            type="submit"
            value="Submit"
            onClick={vplogin}
          />
          <input
            className="create-acc-button"
            type="submit"
            value="Create Account"
          />
        </form>
      </div>
    </div>
  );
}
