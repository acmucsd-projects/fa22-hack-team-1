import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import CreateUser from "./CreateUser";
import WorkHist from "./WorkHist";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Homepage" element={<HomePage />} />
        <Route exact path="/CreateUser" element={<CreateUser />} />
        <Route exact path="/WorkHist" element={<WorkHist />} />
      </Routes>
    </Router>
  );
}
export default App;
