import AnswerComponent from "./AnswerComponent";
import React, { useEffect, useState } from "react";
import TagService from "../../services/ServicesFolder/TagService";

const CreateQuestionComponent = ({ AddQuestion }) => {
  const [answers, setAnswers] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSingleChoice, setIsSingleChoice] = useState(true);

  const [Tags, setTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  const AddAnswers = (answer) => {
    setAnswers(oldArray => [...oldArray, answer]);
  };

  const SubmittedQuestion = () => {
    const question = {
      Title: title,
      Content: content,
      IsSingleChoice: isSingleChoice,
    };
    AddQuestion({ question: question, Tags: Tags, Answers: answers });
  };

  const selectedTag = (tag) => {
    setTags([...Tags, tag]);
  };

  useEffect(() => {
    const initializeAllTags = async () => {
      const allTags = await TagService.GetAllTags().catch((err) =>
        console.log(err)
      );
      setAllTags(allTags);
    };

    initializeAllTags();
  }, []);

  return (
    <form className="form-control">
      <div className="form-control form-control-check">
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
            onChange={(e) => setContent(e.target.checked)}
          />
        </div>
        <div>
          <label>Enter Is if the choice is single</label>
          <input
            type="checkbox"
            value="The choice is single"
            onChange={(e) => setIsSingleChoice(e.target.value)}
          />
        </div>
        <div>
          <label>check tag</label>
          <select onChange={selectedTag}>
            {allTags.map((tag) => (
              <option id={tag.TagId}>{tag.Title}</option>
            ))}
          </select>
        </div>
        <div className="form-control form-control-check">
          <AnswerComponent AddAnswers={AddAnswers} />
        </div>
        <input
          className="btn"
          type="submit"
          value="Create Test"
          onClick={SubmittedQuestion}
        />
      </div>
    </form>
  );
};
export default CreateQuestionComponent;
