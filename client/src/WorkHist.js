/**
 *
 * 1. Create Page
 * 2. Set Up Rendering of Single Exercise Component
 * 3. Refactor for Multiple Components
 *
 */

import React, {
  Component,
  createContext,
  useEffect,
  useState,
  setState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import Exercise from "./Exercise";
import triton from "./images/triton.png";
import "./WorkHist.css";

export default function WorkHist() {
  const [isLoading, setLoading] = useState(true);
  const [exercises, setExercises] = useState([]);

  const { state } = useLocation();
  const username = state.username;
  const navigate = useNavigate();

  const home = () => {
    navigate("../Homepage", {
      state: { username: username },
    });
  };

  const record = () => {
    navigate("../Record", {
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

  useEffect(() => {
    const res = axios
      .post("http://localhost:8080/api/test/getHist", {
        user: String(username),
      })
      .then((response) => {
        console.log(response.data.message);
        setLoading(false);
        setExercises(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  exercises.sort(function (a, b) {
    var d = a.date.replaceAll("/", "-");
    var date = d.split("-");
    var f = new Date(date[2], date[0] - 1, date[1]);
    //console.log(f.toString());

    var d2 = b.date.replaceAll("/", "-");
    var date2 = d2.split("-");
    var f2 = new Date(date2[2], date2[0] - 1, date2[1]);
    //console.log(f2.toString());

    return f2 - f;
  });

  const exerciseList = exercises.map((exercise) => (
    <Exercise
      key={exercise._id}
      date={exercise.date}
      exerciseName={exercise.exerciseName}
      muscleGroup={exercise.muscleGroup}
      reps={exercise.reps}
      sets={exercise.sets}
      weight={exercise.weight}
    />
  ));

  if (exerciseList.length == 0) {
    return (
      <div>
        <div className="topnav">
          <a onClick={home}>Home</a>
          <a onClick={stats}>Stats</a>
          <a onClick={plans}>Plan</a>
          <a className="active">Activity History</a>
        </div>
        <div className="flex-main-wh">
          <img
            className="triton-img"
            src={triton}
            alt="You'll Just Have to Imagine the Fire"
          />
          <h1>Activity History</h1>
          <button onClick={record} className="record-btn">
            Record Custom Exercise
          </button>
          <div className="divider"></div>
          <div>No History to Show</div>
        </div>
      </div>
    );
  }

  const res = axios
    .post("http://localhost:8080/api/test/getInfo", {
      user: String(username),
    })
    .then((response) => {
      console.log(response.data.message);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      }
    });

  return (
    <div>
      <div className="topnav">
        <a onClick={home}>Home</a>
        <a onClick={stats}>Stats</a>
        <a onClick={plans}>Plan</a>
        <a className="active">Activity History</a>
      </div>
      <div className="flex-main-wh">
        <img
          className="triton-img"
          src={triton}
          alt="You'll Just Have to Imagine the Fire"
        />
        <h1>Activity History</h1>
        <button onClick={record} className="record-btn">
          Record Custom Exercise
        </button>
        <div className="divider"></div>
        <div>{exerciseList}</div>
      </div>
    </div>
  );
}
