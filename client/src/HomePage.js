import React, {
  Component,
  createContext,
  useEffect,
  useState,
  setState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomePage.css";
import axios from "axios";
import HomeExercise from "./HomeExercise";
import bell from "./images/Dumbbell.png";

//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

/**
 *
 * STATS PAGE IDEAS:
 *
 * 1. Display a graph of the user's progress over time
 * 2. Display a graph of the user's progress over time for each muscle group
 *
 */

export default function HomePage() {
  const { state } = useLocation();
  const { username } = state;
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);
  const [currentPlan, setCP] = useState([]);
  const [diff, setDiff] = useState([]);

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

  const nextSplit = () => {
    // exports.logWorkout = (req, res) => {
    //   const workout = new Workout({
    //     user: req.body.user,
    //     date: req.body.date,
    //     exerciseName: req.body.exerciseName,
    //     sets: req.body.sets,
    //     reps: req.body.reps,
    //     //rpe: req.body.rpe,
    //     weight: req.body.weight,
    //     muscleGroup: req.body.muscleGroup,
    //     workoutCategory: req.body.muscleCategory,
    //   });

    // const workout = new Workout({
    //   user: req.body.user,
    //   date: req.body.date,
    //   exerciseName: req.body.exerciseName,
    //   sets: req.body.sets,
    //   reps: req.body.reps,
    //   //rpe: req.body.rpe,
    //   weight: req.body.weight,
    //   muscleGroup: req.body.muscleGroup,
    // });

    // currentFinal.forEach((element) => {
    //   const res2 = axios
    //     .post("http://localhost:8080/api/test/logworkout", {
    //       user: username,
    //       date: "01/18/2023",
    //       exerciseName: element.name,
    //       reps: element.reps,
    //       sets: element.sets,
    //       weight: 0,
    //       muscleGroup: "None",
    //     })
    //     .then((response) => {
    //       window.location.reload(true);
    //     })
    //     .catch((error) => {
    //       if (error.response) {
    //         alert("Please try again");
    //       }
    //     });
    // });

    const res = axios
      .post("http://localhost:8080/api/test/updatepart", {
        user: username,
      })
      .then((response) => {
        window.location.reload(true);
      })
      .catch((error) => {
        if (error.response) {
          alert("Please try again");
        }
      });
  };

  useEffect(() => {
    const res = axios
      .post("http://localhost:8080/api/test/getcurrentplan", {
        user: String(username),
      })
      .then((response) => {
        console.log(response.data.message);

        const diff = response.data.message.plan;
        const part = response.data.message.part;

        setDiff(diff);

        const res2 = axios
          .post("http://localhost:8080/api/test/getPlan", {
            Difficulty: diff,
          })
          .then((response) => {
            var key = Object.keys(response.data.message[0])[part];
            setCP(response.data.message[0][key]);
            setLoading(false);
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data);
            }
          });
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

  const handleClick = (event) => {
    event.currentTarget.disabled = true;
  };

  const currentFinal = Object.values(currentPlan);

  console.log("CURRENT PLAN: ", currentFinal);

  const exerciseList = currentFinal.map((exercise) => (
    <HomeExercise
      key={exercise._id}
      exerciseName={exercise.name}
      reps={exercise.reps}
      sets={exercise.sets}
    />
  ));

  return (
    <div>
      <div className="topnav">
        <a className="active">Home</a>
        <a onClick={stats}>Stats</a>
        <a onClick={plans}>Plans</a>
        <a onClick={whist}>Activity History</a>
      </div>
      <div className="flex-main-home">
        <div className="flex-left-home">
          <h1 className="flex-left-head">{diff} Plan:</h1>
          {exerciseList}
        </div>
        <div className="flex-right-home">
          <h1 className="flex-left-head"> Activity Tracker:</h1>
          <button type="button" class="btn btn-primary" onClick={nextSplit}>
            Finish Plan
          </button>
        </div>
      </div>
    </div>
  );
}
