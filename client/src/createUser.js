import React, { Component } from "react";
import {
  BrowserRouter as Router,
  useNavigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";
import "./CreateUser.css";

export default function CreateUser() {
  const navigate = useNavigate();

  //const newUser = () => {
  //const res = axios.post("http://localhost:8080/api/auth/signup", {
  //  username: "a",
  //  password: "a",
  //});
  //};

  const newUser = (event) => {
    event.preventDefault();

    const res = axios
      .post("http://localhost:8080/api/auth/signup", {
        username: event.target.username.value,
        password: event.target.password.value,
        email: event.target.email.value,
      })
      .then((response) => {
        console.log("Account Creation Successful");
        //Display different content for different access tokens

        //For default users
        navigate("../Login");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };

  const cancel = () => {
    //If user entered correct credentials
    navigate("../Login");
  };

  return (
    <>
      <div class="background">
        <form
          onSubmit={newUser}
          id="createUser"
          //          action="http://localhost:8080/api/auth/signup"
          //          method="POST"
        >
          <div class="container" />
          <h1>Sign Up</h1>
          <hr />
          <label for="userName">
            <b>User Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter User Name"
            name="username"
            required
          />{" "}
          <br />
          <label for="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
          />{" "}
          <br />
          <label for="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
          />{" "}
          <br />
          <label for="birthday">
            <b>Birthday</b>
          </label>
          <input type="date" id="birthday" name="birthday" required />
          <br />
          <br />
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />{" "}
          <br />
          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />{" "}
          <br />
          <label for="passwordRepeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="passwordRepeat"
            required
          />{" "}
          <br />
          <div class="clearfix">
            <button type="button" class="cancelbtn">
              Cancel
            </button>
            <button type="submit" class="signupbtn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
