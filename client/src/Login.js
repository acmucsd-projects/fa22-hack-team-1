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

export default function Login() {
  const navigate = useNavigate();
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  axios.defaults.withCredentials = false;

  const vplogin = () => {
    const res = axios
      .post("http://localhost:8080/api/auth/signin", {
        username: "a",
        password: "a",
      })
      .then((response) => {
        console.log("ACCESS TOKEN: ", response.data.accessToken);
        //Display different content for different access tokens

        //For default users
        navigate("../HomePage");
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
        <form action="http://localhost:8080/api/auth/signin" method="POST">
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
          <button className="login-button" type="button" onClick={vplogin}>
            Submit
          </button>
          <input
            className="create-acc-button"
            type="submit"
            value="Create Account"
            onClick={cacc}
          />
        </form>
      </div>
    </div>
  );
}
