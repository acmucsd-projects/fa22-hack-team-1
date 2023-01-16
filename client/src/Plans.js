import React, { Component, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Plans.css";
export default function Plans(){
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
    

    return(
    <div>
        <div className="topnav">
            <a onClick = {home}>Home</a>
            <a onClick = {stats}>
                Stats
            </a>
            <a className = "active">Plans
            </a>
            <a onClick = {whist}>
            Activity History
            </a>
      </div>
        <div className = "flex-main-plans">
            
            <div className = "flex-left-plans">
                <h1>Beginner Plan</h1>
                <h2>
                  Upper Body/ Lower Split
                </h2>
                <h3>
                  Upper Body
                </h3>
                <p1>
                Incline Dumbbell Chest Press, Lat Pull Down, Seated Cable Row, Shoulder Lateral Raises, Tricep Extensions, Bicep Curls
                </p1>
                <h3>
                  Rest
                </h3>
                <h3>
                  Lower
                </h3>
                <p1>
                Squats, Seated Leg Press, Glute Bridges, Leg Extension, Hamstring Curls, Calf Raises 
                </p1>
            </div>
            <div className = "flex-mid-plans">
                <h1>Intermediate Plan</h1>
                <h2>
                  Chest/Back, Arms, Legs Split
                </h2>
                <h3>
                Arms
                </h3>
                <p1>
                Dumbbell Shoulder Press, Cable Lateral Raises, Rear Delt Flies, Tricep Extensions, Preacher Curls, Hammer Curls
                  
                </p1>
                <h3>
                Legs/Abs
                </h3>
                <p1>
                Squats, Seated Leg Press, Crunches, Leg Extension, Hamstring Curls, Calf Raises 
                </p1>
                
                <h3>
                  Chest/Back
                </h3>
                <p1>
                Incline Dumbbell Press, Chest Press Machine, Cable Flies, Lat Pull Down, Seated Cable Row, Lat Pull Overs

                </p1>
                <h3>
                  Rest
                </h3>
            </div>
            <div className = "flex-right-plans">
                <h1>Advanced Plan</h1>
                <h2>
                  Push, Pull, Legs Split
                </h2>
                <h3>
                  Push
                </h3>
                <p1>
                Bench Press, Incline Dumbbell Press, Dips, Lateral Raises, Tricep Extensions
                </p1>
                <h3>
                  Pull
                </h3>
                <p1>
                Lat Pull Down, Seated Cable Row, Lat Pullovers, Preacher Curls, Incline Curls, Hammer Curls
                </p1>
                <h3>
                  Legs
                </h3>
                <p1>
                Squats, Seated Leg Press, Glute Bridges Leg Extension, Hamstring Curls, Calf Raises
                </p1>
                <h3>
                  Rest
                </h3>
            </div>
        </div>
    </div>
    )
}