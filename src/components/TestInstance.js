import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionService from "../services/ServicesFolder/QuestionService"
import AnswerService from "../services/ServicesFolder/AnswerService"
import QuestionInstance from "../components/TestInstanceComponents/QuestionInstance";
import Answers from "./TestInstanceComponents/Answers";

const TestInstance = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [questionCounter, setQuestionCounter] = useState(0);
  const [canStartTest, setCanStartTest] = useState(false);
  const [finishedTest, setFinishedTest] = useState(false);

  function shuffleArray(array) {
    if (array.length === 0) return array;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  let navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    const initializeTestQuestions = async () => {
        const questionsForCurrentTest = await getQuestionsForCurrentTest();
        shuffleArray(questionsForCurrentTest);
        setQuestions(questionsForCurrentTest);
        initializeAnswersToQuestions(questionsForCurrentTest);
        
        console.log(questions[questionCounter])
      };
      const initializeAnswersToQuestions = async (filteredQuestions) => {
        const filteredAnswers = await getAnswersForCurrentQuestion(filteredQuestions[questionCounter].QuestionId);
        setAnswers(filteredAnswers);
        setAnswers(filteredAnswers);
      };
      initializeTestQuestions();
      

  }, [])

  const onStartTest  = () => {
    setCanStartTest(true);
    setCurrentQuestion(questions[questionCounter]);
    setCurrentAnswers(answers);
  }

  const getQuestionsForCurrentTest = async () => {
    const res = await QuestionService.GetQuestionsByTestId(id);   
    return [...res];
  };


  const getAnswersForCurrentQuestion = async (questionid) => {
    const res = await AnswerService.GetAnswersByQuestionId(questionid);
    return [...res];
  };

  const onQuestionSubmit = async () => {
    if (questionCounter < questions.length) {
      setQuestionCounter(questionCounter + 1);
      setCurrentQuestion(questions[questionCounter]);
      const nextAnswers = await getAnswersForCurrentQuestion(questions[questionCounter].QuestionId)
        .then((answers) => {
          setCurrentAnswers(answers);
        });
      
    }
    else {
      setFinishedTest(true);
    }
  }

  return (
    <div>
      {
        (() => {
          if(!finishedTest)
          return (
              <div className="test-container">
                {
                  (() => {
                    if (!canStartTest && answers && currentAnswers)  
                    return (
                    <div>
                      <p>Welcome to the test! to start press begin:</p>
                      <button 
                        className="btn" 
                        onClick={() => onStartTest()}>Start Test
                      </button> 
                    </div>)
                    else
                      return (
                      <QuestionInstance 
                      currentQuestion={currentQuestion} 
                      currentAnswers={currentAnswers}
                      questionCounter={questionCounter}
                      onQuestionSubmit={() => onQuestionSubmit()}
                      totalQuestions={questions.length}
                      />)
                    })()
                  }
              </div>
          )
          else 
              return (
                <div className="test-container">
                  <p>thank you! Results will be mailed to you.</p>
                </div>
              )
        })()
            
          
          
      }
    </div>
  );
};

export default TestInstance;
// {answers.map((answer) => (
//   <AnswerInstance key={answer.Id} answer={answer} />
// ))}