import React, { useState, useEffect } from "react";
import CreateTag from "./CreateTag";
import TagSelector from "./TagSelector";
import TagService from "../services/ServicesFolder/TagService";

const CreateQuestionNew = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const [isSingleChoice, setIsSingleChoice] = useState(true);
  const [questionTags, setQuestionTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    const initializeAllTags = async () => {
      const allTags = await TagService.GetAllTags().catch((err) =>
        console.log(err)
      );
      setAllTags(allTags);
    };

    initializeAllTags();
  }, []);

  const selectedTag = (tag) => {
    setQuestionTags([...questionTags, tag]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!questionTitle) {
      alert("Please enter a questionTitle");
    }
    if (!questionContent) {
      alert("Please enter a questionContent");
    }

    //TODO TOMORROW: 
    //POST question and tags to relevant DB columns, add answers to the equation and post it too.



    //1. create question in api via post
    //(then ) create answers for the question, with the questionid

    // const value = await createTestInstance({ TestId ,Email, FirstName, LastName })
    //         .then((res) => {return res.data})
    //         .then((res) => navigate('/test/' + id + '/' + res))

    setQuestionTitle("");
    setQuestionContent("");
    setIsSingleChoice(false);
  };

  return (
    <div className="homeContainer">
        <h2>Create your Own Question</h2>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Enter Question Title</label>
          <input
            type="text"
            placeholder="Email"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Enter Content</label>
          <input
            type="text"
            placeholder="First Name"
            value={questionContent}
            onChange={(e) => setQuestionContent(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Set is single choice</label>
          <input
            type="checkbox"
            checked={isSingleChoice}
            value={isSingleChoice}
            onChange={(e) => setIsSingleChoice(e.currentTarget.checked)}
          />
        </div>
      </form>
        <TagSelector 
            allTags={allTags}
            questionTags={questionTags}
            setQuestionTags={setQuestionTags}
        />
        <input className="btn" type="submit" value="Save Question" />
    </div>
  );
};

export default CreateQuestionNew;
