import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="homeContainer">
        <h1 style={{ textAlign: "center" }}>Wecome to Quizzer</h1>
        <button className="btn" onClick={() => navigate("/tests")}
          style={{ backgroundColor: "green",
          textAlign: "center", display: "flex",
          justifyContent: "space-between",
          margin: "50px auto" }}>
          Go To Tests
        </button>
        <button className="btn" onClick={() => navigate("/questions")}
          style={{ backgroundColor: "green",
          textAlign: "center", display: "flex",
          justifyContent: "space-between",
          margin: "50px auto" }}>
          Go To Questions
        </button>
      </div>
    </div>
  );
};

export default Home;
