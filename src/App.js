import React, { Component } from "react";
import "./App.css";

class App extends Component {
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
              Username:
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
              Password:
            </label>
            <br />
            <input
              class="form-input"
              type="password"
              id="password"
              name="password"
            />
            <br />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
