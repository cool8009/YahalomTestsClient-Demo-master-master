import React, { useState, useEffect } from "react";
import CreateTag from "./CreateTag";
import TagSelector from "./TagSelector";
import TagService from "../services/ServicesFolder/TagService";
import QuestionService from "../services/ServicesFolder/QuestionService";
import AnswerService from "../services/ServicesFolder/AnswerService";
import QuestionTagsService from "../services/ServicesFolder/QuestionTagsService";
import AnswerComponent from "../components/CreateTest/AnswerComponent";

const CreateQuestionNew = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const [isSingleChoice, setIsSingleChoice] = useState(true);
  const [questionTags, setQuestionTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [amountOfAnswers, setAmountOfAnswers] = useState(2);
  const [userAnswers, setUserAnswers] = useState([{
  }]);

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

  const onAddAnswer = async (answer) => {
      debugger;
    setUserAnswers([...userAnswers, answer]);
  };

  const onRemoveAnswer = async (answer) => {
    if (userAnswers.Length === 0 || amountOfAnswers < 2) return;
    const newUserAnswers = userAnswers.filter((a) => a !== answer);
    setUserAnswers(newUserAnswers);
    setAmountOfAnswers(amountOfAnswers - 1);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!questionTitle) {
      alert("Please enter a questionTitle");
    }
    if (!questionContent) {
      alert("Please enter a questionContent");
    }

    try {
      const value = await QuestionService.AddQuestion({
        Title: questionTitle,
        Content: questionContent,
        IsSingleChoice: isSingleChoice,
      })
        .then((res) => {
          return res.data;
        })
        .then((res) =>
          questionTags
            .forEach(
              async (tag) =>
                await QuestionTagsService.AddQuestionTag({
                  QuestionId: res,
                  TagId: tag.TagId,
                })
            )
            .then((res) => AnswerService.AddAnswer({}))
        );
    } catch (error) {
      console.log(error);
    }

    setQuestionTitle("");
    setQuestionContent("");
    setIsSingleChoice(false);
  };

  const handleAddTag = (tag) => {
    setAllTags([...allTags, tag]);
  };
  return (
    <div className="homeContainer">
      <h2>Create your Own Question</h2>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Enter Question Title</label>
          <input
            type="text"
            placeholder="Title"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Enter Content</label>
          <input
            type="text"
            placeholder="Content"
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
        handleAddTag={handleAddTag}
        allTags={allTags}
        questionTags={questionTags}
        setQuestionTags={setQuestionTags}
        selectedTag={selectedTag}
      />
      {[...Array(amountOfAnswers)].map((value: undefined, index: number) => (
        <AnswerComponent
          id={index + 1}
          key={index}
          onAddAnswer={onAddAnswer}
          onRemoveAnswer={onRemoveAnswer}
        />
      ))}
      <button
        className="btn"
        onClick={() => setAmountOfAnswers(amountOfAnswers + 1)}
      >
        Add Answer
      </button>
      <input className="btn" type="submit" value="Save Question" />
    </div>
  );
};

export default CreateQuestionNew;
