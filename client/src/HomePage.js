import React, { Component, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomePage.css";
import axios from "axios";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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

  const plans = () => {
    navigate("../Plans", {
      state: { username: username },
    });
  };

  const stats = () => {
    navigate("../Stats", {
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

  const handleClick = (event) => {
    event.currentTarget.disabled = true;
  };

  return (
    <div>
      <div className="topnav">
        <a className="active">Home</a>
        <a onClick = {stats}>Stats</a>
        <a onClick = {plans}>Plans</a>
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
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Exercise</th>
                <th scope="col">Set 1</th>
                <th scope="col">Set 2</th>
                <th scope="col">Set 3</th>
                <th scope="col">Set 4</th>
                <th scope="col">Set 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Exercise 1</th>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    5
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">Exercise 2</th>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    5
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">Exercise 3</th>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    5
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">Exercise 4</th>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    5
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">Exercise 5</th>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={handleClick}
                  >
                    5
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="button" class="btn btn-primary">
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
