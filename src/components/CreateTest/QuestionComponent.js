import AnswerComponent from "./AnswerComponent";
import React, { useEffect, useState } from "react";
import TagService from "../../services/ServicesFolder/TagService";

const QuestionComponent = ({AddQuestion}) => {
  const [answers, setAnswers ]= useState([])

  const [title, setTitle]=useState('');    
  const [content, setContent]=useState('');
  const [isSingleChoice, setIsSingleChoice]=useState(true);

  const [Tags, setTags] = useState([]);

  const allTags = async() =>await TagService.GetAllTags();

  const AddAnswers=(answer)=>{
    setAnswers([...answers, answer]);
  }

  const SubmittedQuestion = () => {
    const question = {Title: title,Content: content,IsSingleChoice: isSingleChoice};
    AddQuestion({question: question, Tags: Tags,Answers: answers});
  }
  
  const selectedTag=(tag)=>{
    setTags([...Tags, tag]);
  }

  return (
      <form className="add-form">
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
            onChange={(e) => setContent(e.target.checked)}
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
        <div className="form-control form-control-check">
          <label>check tag</label>
          <select > 
            {allTags().map((tag) => (
              <option>{tag.Title}</option>
            ))}
            </select>
        </div>
        <div>
          <AnswerComponent AddAnswers={AddAnswers}/>
        </div>
        <input className="btn" type="submit" value="Create Test" onClick={SubmittedQuestion} />
      </form>
    );
}
export default  QuestionComponent
