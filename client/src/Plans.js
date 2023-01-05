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
            </div>
            <div className = "flex-mid-plans">
                <h1>Intermediate Plan</h1>
            </div>
            <div className = "flex-right-plans">
                <h1>Advanced Plan</h1>
            </div>
        </div>
    </div>
    )
}