import { useEffect, useState } from "react";
import QuestionsTable from "./QuestionsTable";
import QuestionForm from "./QuestionForm";
import QuestionService from "../services/ServicesFolder/QuestionService"
//const QuestionService = require("../services/Services").QuestionService;

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const getQuestions = async () => {
      const questionsFromServer = await QuestionService.GetAllQuestions();
      setQuestions(questionsFromServer);
    };

    getQuestions();
  }, []);

  const addQuestion = async (question) => {
    const /*res*/data = QuestionService.AddQuestion(question);
   // const data = await res.json();
    //combine the old tesks with the new (like array.push only you cant do that to state since its mutable)
    // eslint-disable-next-line no-const-assign
    setQuestions =([...questions, data]);
  };
  //   useEffect(() => {
  //     const getQuestions = async () => {
  //       const questionsFromServer = await QuestionService.getAllQuestions();
  //       setQuestions(questionsFromServer);
  //     };
  //     getQuestions();
  //   }, []);

  return (
    <div className="container questions">
      <div className="side">
        <h1>Questions List</h1>
        <QuestionsTable questions={questions} />
      </div>
      <div className="side">
        <h1>Add a new question</h1>
        <QuestionForm onAddQuestion={addQuestion} />
      </div>
    </div>
  );
};

export default Questions;
