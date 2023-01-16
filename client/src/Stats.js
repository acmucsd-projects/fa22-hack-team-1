import React, { Component, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Stats.css";
import axios from "axios";

export default function Stats() {
    const { state } = useLocation();
    const { username } = state;
    const navigate = useNavigate();
    const home = () => {
        navigate("../Homepage", {
          state: { username: username },
        });
      };
    
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

    return(
        <div>
            <div className="topnav">
                <a onClick = {home}>Home</a>
                <a onClick = {stats} className = "active">Stats</a>
                <a onClick = {plans}>Plans</a>
                <a onClick={whist}>Activity History</a>
            </div>
            <div className = "flex-main-stats">
              <div className ="flex-box-stats">
                <h1>User Stats</h1>
                <h2>First Name: </h2>
                <h2>Last Name: </h2>
                <h2>Email: </h2>
              </div>
            </div>
        </div>
    );
}