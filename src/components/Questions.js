import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import QuestionsTable from "./QuestionsTable";
import QuestionForm from "./QuestionForm";
import QuestionService from "../services/ServicesFolder/QuestionService"
//const QuestionService = require("../services/Services").QuestionService;

const Questions = () => {
  let navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const getQuestions = async () => {
      const questionsFromServer = await QuestionService.GetAllQuestions();
      setQuestions(questionsFromServer);
    };

    getQuestions();
  }, []);

  const addQuestion = async (question) => {
    const data = QuestionService.AddQuestion(question);
    setQuestions =([...questions, data]);
  };

  return (
    <div className="container questions">
      <div className="side">
        <h1>Questions List</h1>
        <QuestionsTable questions={questions} />
      </div>
      <div className="side">
        <h1>Add a new question</h1>
        <button className="btn" onClick={() => navigate('/createQuestionNew')}>
          Go To Questions
        </button>
      </div>
    </div>
  );
};

export default Questions;
