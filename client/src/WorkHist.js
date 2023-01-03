/**
 *
 * 1. Create Page
 * 2. Set Up Rendering of Single Exercise Component
 * 3. Refactor for Multiple Components
 *
 */

import React, { Component, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import Exercise from "./Exercise";
import triton from "./images/triton.png";
import "./WorkHist.css";

export default function WorkHist() {
  const { state } = useLocation();
  //const { username } = state;
  const username = state.username;
  const navigate = useNavigate();

  const home = () => {
    navigate("../Homepage", {
      state: { username: username },
    });
  };

  const res = axios
    .post("http://localhost:8080/api/test/getHist", {
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
        <a>Stats</a>
        <a>Plan</a>
        <a className="active">Activity History</a>
      </div>
      <div className="flex-main-wh">
        <img
          className="triton-img"
          src={triton}
          alt="You'll Just Have to Imagine the Fire"
        />
        <h1>Activity History</h1>
        <Exercise />
      </div>
    </div>
  );
}
