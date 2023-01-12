import React, { Component } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";
import "./Record.css";

export default function Record() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { username } = state;

  const whist = () => {
    navigate("../WorkHist", {
      state: { username: username },
    });
  };

  const attemptrecord = (event) => {
    event.preventDefault();

    const name = event.target.ex_name.value;
    const reps = event.target.ex_reps.value;
    const sets = event.target.ex_sets.value;
    const weight = event.target.ex_weight.value;
    const muscle = event.target.ex_musc.value;

    console.log(name);
    console.log(reps);
    console.log(sets);
    console.log(weight);
    console.log(muscle);

    if (
      name == "" ||
      reps == "" ||
      sets == "" ||
      weight == "" ||
      muscle == ""
    ) {
      alert("Please Fill All Required Field");
      return false;
    } else {
      // const workout = new Workout({
      //   user: req.body.user,
      //   date: req.body.date,
      //   exerciseName: req.body.exerciseName,
      //   sets: req.body.sets,
      //   reps: req.body.reps,
      //   //rpe: req.body.rpe,
      //   weight: req.body.weight,
      //   muscleGroup: req.body.muscleGroup,
      //   workoutCategory: req.body.muscleCategory,
      // });

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;

      const res = axios
        .post("http://localhost:8080/api/test/logWorkout", {
          user: username,
          date: today,
          exerciseName: name,
          reps: reps,
          sets: sets,
          weight: weight,
          muscleGroup: muscle,
          workoutCategory: "None",
        })
        .then((response) => {
          console.log("ACCESS TOKEN: ", response.data.accessToken);
          //Display different content for different access tokens

          //For default users
          navigate("../WorkHist", {
            state: { username: username },
          });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            alert("Invalid username or password");
          }
        });
    }
  };

  return (
    <div className="uh">
      <h1 className="rec-title">Record Custom Exercise</h1>
      <form onSubmit={attemptrecord}>
        <label className="rec-form-label" for="ex_name">
          Exercise Name:
        </label>
        <input type="text" name="ex_name" id="ex_name" />
        <br />
        <label className="rec-form-label" for="ex_reps">
          Number of Reps:
        </label>
        <input type="number" name="ex_reps" id="ex_reps" />
        <br />
        <br />
        <label className="rec-form-label" for="ex_sets">
          Number of Sets:
        </label>
        <input type="number" name="ex_sets" id="ex_sets" />
        <br />
        <br />
        <label className="rec-form-label" for="ex_weight">
          Weight (lbs):
        </label>
        <input type="number" name="ex_weight" id="ex_weight" />
        <br />
        <br />
        <label className="rec-form-label" for="ex_musc">
          Muscles:
        </label>
        <input type="text" name="ex_musc" id="ex_musc" />
        <br />
        <button onClick={whist} className="cancelbtn">
          Cancel
        </button>
        <button type="submit" className="recordbtn">
          Record Exercise
        </button>
      </form>
    </div>
  );
}
