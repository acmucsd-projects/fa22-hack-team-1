import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {};

  render() {
    return (
      <div class="flex-main">
        <div class="flex-left">
          <img
            class="image-main"
            src={require("./images/rec.png")}
            alt="You'll Just Have to Imagine the Fire"
          />
        </div>
        <div class="flex-right">
          <h1 class="right-header"> Welcome to UCSD Gym Bros</h1>
          <form>
            <label class="form-header" for="username">
              <b>Username or Email:</b>
            </label>
            <br />
            <input
              class="form-input"
              type="text"
              id="username"
              name="username"
            />
            <br />
            <br />
            <label class="form-header" for="password">
              <b>Password:</b>
            </label>
            <br />
            <input
              class="form-input"
              type="password"
              id="password"
              name="password"
            />
            <br />
            <p>
              <a class="forgot-pass" href="https://www.w3schools.com/">
                Forgot Password
              </a>
            </p>
            <br />
            <br />
            <input class="login-button" type="submit" value="Submit" onClick={function1}/>
            <input
              class="create-acc-button"
              type="submit"
              value="Create Account"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
