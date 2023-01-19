import React, { Component, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Plans.css";
import axios from "axios";
export default function Plans() {
  const { state } = useLocation();
  const { username } = state;
  const navigate = useNavigate();
  const home = () => {
    navigate("../Homepage", {
      state: { username: username },
    });
  };
  const stats = () => {
    navigate("../stats", {
      state: { username: username },
    });
  };
  const whist = () => {
    navigate("../Workhist", {
      state: { username: username },
    });
  };
  const leftClick = (event) => {
    console.log(event.target);

    // exports.addCurrentPlan = (req, res) => {
    //   const currworkout = new CurrentWorkout({
    //     user: req.body.user,
    //     plan: req.body.plan,
    //     part: req.body.part,
    //   });

    const res = axios
      .post("http://localhost:8080/api/test/addcurrentplan", {
        user: username,
        plan: "Easy",
        part: 0,
      })
      .then((response) => {
        console.log("ACCESS TOKEN: ", response.data.accessToken);
        alert("Easy Plan Added to Home Page");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          alert("Error Adding Exercise");
        }
      });
  };

  const midClick = (event) => {
    const res = axios
      .post("http://localhost:8080/api/test/addcurrentplan", {
        user: username,
        plan: "Medium",
        part: 0,
      })
      .then((response) => {
        console.log("ACCESS TOKEN: ", response.data.accessToken);
        alert("Medium Plan Added to Home Page");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          alert("Error Adding Exercise");
        }
      });
  };

  const rightClick = (event) => {
    const res = axios
      .post("http://localhost:8080/api/test/addcurrentplan", {
        user: username,
        plan: "Easy",
        part: 0,
      })
      .then((response) => {
        console.log("ACCESS TOKEN: ", response.data.accessToken);
        alert("Hard Plan Added to Home Page");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          alert("Error Adding Exercise");
        }
      });
  };

  return (
    <div>
      <div className="topnav">
        <a onClick={home}>Home</a>
        <a onClick={stats}>Stats</a>
        <a className="active">Plans</a>
        <a onClick={whist}>Activity History</a>
      </div>
      <div className="flex-main-plans">
        <div className="flex-left-plans" onClick={leftClick}>
          <h1>Beginner Plan</h1>
          <h2>Upper Body/ Lower Split</h2>
          <h3>Upper Body</h3>
          <p1>
            Incline Dumbbell Chest Press, Lat Pull Down, Seated Cable Row,
            Shoulder Lateral Raises, Tricep Extensions, Bicep Curls
          </p1>
          <h3>Lower</h3>
          <p1>
            Squats, Seated Leg Press, Glute Bridges, Leg Extension, Hamstring
            Curls, Calf Raises
          </p1>
        </div>
        <div className="flex-mid-plans" onClick={midClick}>
          <h1>Intermediate Plan</h1>
          <h2>Chest/Back, Arms, Legs Split</h2>
          <h3>Arms</h3>
          <p1>
            Dumbbell Shoulder Press, Cable Lateral Raises, Rear Delt Flies,
            Tricep Extensions, Preacher Curls, Hammer Curls
          </p1>
          <h3>Legs/Abs</h3>
          <p1>
            Squats, Seated Leg Press, Crunches, Leg Extension, Hamstring Curls,
            Calf Raises
          </p1>

          <h3>Chest/Back</h3>
          <p1>
            Incline Dumbbell Press, Chest Press Machine, Cable Flies, Lat Pull
            Down, Seated Cable Row, Lat Pull Overs
          </p1>
        </div>
        <div className="flex-right-plans" onClick={rightClick}>
          <h1>Advanced Plan</h1>
          <h2>Push, Pull, Legs Split</h2>
          <h3>Push</h3>
          <p1>
            Bench Press, Incline Dumbbell Press, Dips, Lateral Raises, Tricep
            Extensions
          </p1>
          <h3>Pull</h3>
          <p1>
            Lat Pull Down, Seated Cable Row, Lat Pullovers, Preacher Curls,
            Incline Curls, Hammer Curls
          </p1>
          <h3>Legs</h3>
          <p1>
            Squats, Seated Leg Press, Glute Bridges Leg Extension, Hamstring
            Curls, Calf Raises
          </p1>
        </div>
      </div>
    </div>
  );
}
