import React, { Component, createContext } from "react";
import "./WorkHist.css";

export default function WorkHist() {
  return (
    <div>
      <div className="topnav">
        <a href="http://localhost:3000/Homepage">Home</a>
        <a>Stats</a>
        <a>Plan</a>
        <a className="active" href="http://localhost:3000/WorkHist">
          Activity History
        </a>
      </div>
      <div className="flex-main-wh"></div>
    </div>
  );
}
