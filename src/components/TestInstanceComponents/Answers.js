import React from "react";
import AnswerInstance from "./AnswerInstance";

const Answers = ({ currentAnswers, isChecked, currentSubmittedAnswer, setCurrentSubmittedAnswer, isSingleChoice }) => {
  let isSelectable = true; 
  return (
    <div>
      { currentAnswers && currentAnswers.map((answer) => (       
        <AnswerInstance 
        isSingleChoice={isSingleChoice}
        key={answer.AnswerId} 
        answer={answer}
        currentSubmittedAnswer={currentSubmittedAnswer}
        setCurrentSubmittedAnswer={setCurrentSubmittedAnswer}
        isSelectable={isSelectable}  />
      ))}
    </div>
  );
};

export default Answers;
