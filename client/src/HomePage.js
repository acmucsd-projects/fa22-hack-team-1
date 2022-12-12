import React, { Component, createContext } from "react";
import { useLocation } from "react-router-dom";
import "./homePage.css";
import axios from "axios";
export default function HomePage() {
  const { state } = useLocation();
  const { username } = state;

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

  return (
    <div>
      <div className="topnav">
        <a className="active">Home</a>
        <a>Stats</a>
        <a>Plans</a>
        <a>Account Settings</a>
      </div>
      <div className="flex-main1">
        <div className="flex-top">
          <p>Hello</p>
        </div>
        <div className="flex-bot"></div>
      </div>
    </div>
  );
}
