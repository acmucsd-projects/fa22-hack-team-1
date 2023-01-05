import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import CreateUser from "./CreateUser";
import WorkHist from "./WorkHist";
import Plans from "./Plans";
import Stats from "./Stats";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Homepage" element={<HomePage />} />
        <Route exact path="/CreateUser" element={<CreateUser />} />
        <Route exact path="/WorkHist" element={<WorkHist />} />
        <Route exact path = "/Plans" element = {<Plans/>}/>
        <Route exact path = "/Stats" element = {<Stats/>}/>
      </Routes>
    </Router>
  );
}

export default App;
