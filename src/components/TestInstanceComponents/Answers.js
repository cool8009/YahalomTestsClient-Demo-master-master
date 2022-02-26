import React from "react";
import AnswerInstance from "./AnswerInstance";

const Answers = ({ currentAnswers }) => {
  return (
    <div>
      { currentAnswers && currentAnswers.map((answer) => (       
        <AnswerInstance key={answer.AnswerId} answer={answer}  />
      ))}
    </div>
  );
};

export default Answers;
