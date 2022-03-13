import QuestionComponent from "./CreateQuestionComponent";
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimes } from 'react-icons/fa'
import CompanyService from "../../services/ServicesFolder/CompanyService"
import FieldOfStudyService from "../../services/ServicesFolder/FieldOfStudyService"

const AnswerComponent = ({onAddAnswer, onRemoveAnswer}) => {

  const [title, setTitle]=useState(''); 
  const [content, setContent]=useState(''); 
  const [isTrue, setisTrue]=useState(false);
  const [isAdded, setIsAdded]=useState(false);

  const submittedAnswer = () => {
    onAddAnswer({Title: title, Content: content, IsTrue: isTrue});
    setIsAdded(true);
  }

  return (
      <form className="form-control" >
        <div>
          <label>Enter Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Enter Content</label>
          <input
            type="text"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label>Enter if this answer is true</label>
          <input
            type="checkbox"
            checked={isTrue}
            value={isTrue}
            onChange={(e) => setisTrue(e.target.value)}
          />
        </div>
        <input className="btn" type="submit" value="Create Answer"  onClick={submittedAnswer}/>
        {isAdded && <h3>
            <FaCheckCircle/> 
        </h3>}
        <h2>
        <FaTimes style={{ color: 'red', 
            cursor: 'pointer' }} 
            onClick={() => onRemoveAnswer({Title: title, Content: content, IsTrue: isTrue})}/>
        </h2>
      </form>
    );
}

export default AnswerComponent