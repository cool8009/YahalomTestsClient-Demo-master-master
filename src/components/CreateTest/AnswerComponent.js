import QuestionComponent from "./QuestionComponent";
import React, { useEffect, useState } from "react";
import CompanyService from "../../services/ServicesFolder/CompanyService"
import FieldOfStudyService from "../../services/ServicesFolder/FieldOfStudyService"



const AnswerComponent = ({AddAnswers}) => {

  const [title, setTitle]=useState(''); 
  const [isTrue, setisTrue]=useState(false);

  const submittedAnswer = () =>
    AddAnswers({Title: title,IsTrue: isTrue});

  return (
      <form className="add-form" >
        <div className="form-control">
          <label>Enter Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Enter if this answer is true</label>
          <input
            type="checkbox"
            value="Its true answer"
            onChange={(e) => setisTrue(e.target.value)}
          />
        </div>
        <input className="btn" type="submit" value="Create Answer"  onClick={submittedAnswer}/>
      </form>
    );
}

export default AnswerComponent