import AnswerComponent from "./AnswerComponent";
import React, { useEffect, useState } from "react";

const QuestionComponent = ({onSubmit}) => {
  const [Answers, setAnswers ]= useState([])

  const [Title, setTitle]=useState('');    
  const [Content, setContent]=useState('');
  const [IsSingleChoice, setIsSingleChoice]=useState(true);

  const AddAnswers=(answer)=>{
    setAnswers([...Answers,answer]);
  }

  const AddQuestion(){
      const question = {Title,Content,IsSingleChoice};
      onSubmit({question,tags,Answers});
  }

  return (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Enter Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Enter Content</label>
          <input
            type="text"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Enter Is if the choice is single</label>
          <input
            type="checkbox"
            value="The choice is single"
            onChange={(e) => setIsSingleChoice(e.target.value)}
          />
        </div>
        <AnswerComponent onSubmit={AddAnswers}/>
        <input className="btn" type="submit" value="Create Test" onClick={onSubmit()} />
      </form>
    );
}