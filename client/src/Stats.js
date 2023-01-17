import React, {
  Component,
  createContext,
  useEffect,
  useState,
  setState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Stats.css";
import axios from "axios";

export default function Stats() {
  const { state } = useLocation();
  const { username } = state;
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);
  const [email, setEmail] = useState([]);
  const [firstname, setfn] = useState([]);
  const [lastname, setln] = useState([]);

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

  useEffect(() => {
    const res = axios
      .post("http://localhost:8080/api/test/getInfo", {
        user: String(username),
      })
      .then((response) => {
        console.log(response.data.message);
        setLoading(false);
        setEmail(response.data.message.email);
        console.log(response.data.message);
        setfn(response.data.message.first_name);
        setln(response.data.message.last_name);
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

  return (
    <div>
      <div className="topnav">
        <a onClick={home}>Home</a>
        <a onClick={stats} className="active">
          Stats
        </a>
        <a onClick={plans}>Plans</a>
        <a onClick={whist}>Activity History</a>
      </div>
      <div className="flex-main-stats">
        <div className="flex-box-stats">
          <h1>User Stats</h1>
          <h2>First Name: </h2>
          <p>{firstname}</p>
          <h2>Last Name: </h2>
          <p>{lastname}</p>
          <h2>Username: </h2>
          <p>{username}</p>
          <h2>Email: </h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
