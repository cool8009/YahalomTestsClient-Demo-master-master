import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const TestCard = ({ test }) => {
  let navigate = useNavigate();
  return (
    <div className="test">
      <h2>{test.Title}</h2>
      <p>{test.Intro}</p>
      <p>Minimum to pass: {test.MinimumToPass}</p>
      <button
        className="btn"
        style={{ backgroundColor: "green" }}
        onClick={() => navigate('/test/' + test.TestId)}
      >
        Take Test
      </button>
    </div>
  );
};

export default TestCard;
