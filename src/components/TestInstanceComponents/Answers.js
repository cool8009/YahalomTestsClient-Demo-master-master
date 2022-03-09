import React, {useState} from "react";
import AnswerInstance from "./AnswerInstance";

const Answers = ({ currentAnswers, submittedAnswers,
  setSubmittedAnswers, isSingleChoice, onQuestionSubmit, onAnswerSubmit }) => {
    const [selectedRadioButton, setSelectedRadioButton] = useState();

    const isRadioSelected = (value) => {
    
      return selectedRadioButton === value;
    }
  
    const handleRadioClick = (e) => {
      setSelectedRadioButton(e.currentTarget.value);
    }
    //edit the method to save the id
  return (
    <div>
      { currentAnswers && currentAnswers.map((answer) => (       
      <div key={answer.AnswerId}>
        <input
            name='currentDisplayedAnswers'
            type={isSingleChoice ? 'checkbox' : 'radio'}
            value={answer.AnswerId}
            isChecked={isRadioSelected(answer.AnswerId)}
            onChange={handleRadioClick}
            />
            <label>{answer.Content}</label>
            
    </div>
      ))}
    <button type='submit' onClick={() => { onQuestionSubmit(); onAnswerSubmit(selectedRadioButton);}}>Submit</button>
    </div>
  );
};

export default Answers;
