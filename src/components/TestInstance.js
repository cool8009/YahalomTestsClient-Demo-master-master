import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionService from "../services/ServicesFolder/QuestionService"
import AnswerService from "../services/ServicesFolder/AnswerService"
import QuestionInstance from "../components/TestInstanceComponents/QuestionInstance";
import Answers from "./TestInstanceComponents/Answers";
import EndTest from "./EndTest";

const TestInstance = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [questionCounter, setQuestionCounter] = useState(0);
  const [canStartTest, setCanStartTest] = useState(false);
  const [finishedTest, setFinishedTest] = useState(false);
  const [submittedAnswers, setSubmittedAnswers] = useState([])

  function shuffleArray(array) {
    if (array.length === 0) return array;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const handleUpdateSubmittedAnswers = (index, submittedAnswer) => {
    const newSubmittedAnswers = [...submittedAnswers];
    newSubmittedAnswers[index] = submittedAnswer;
    setSubmittedAnswers(newSubmittedAnswers);
}
  function onAnswerSubmit(submittedAnswer) {
    let answerExists = false;
    if (submittedAnswers.length === 0)
      setSubmittedAnswers([...submittedAnswers, submittedAnswer]);
    else {
      submittedAnswers.forEach((answer, index) => {
        if(answer.QuestionId === submittedAnswer.QuestionId) {
          handleUpdateSubmittedAnswers(submittedAnswer, index)
          answerExists = true;
        }
        });
      if (answerExists)
        return;
      else
        setSubmittedAnswers([...submittedAnswers,submittedAnswer])
    }
  }

  let navigate = useNavigate();
  let { id, res: testinstanceid } = useParams();
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

  const onTestSubmit = async (testInstanceId) => {
    let scorePerQuestion = Math.round(100 / questions.length);
    let userGrade = 0;
    submittedAnswers.forEach((answer) => {
      if (answer.IsTrue)
        userGrade += scorePerQuestion;
    });

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
                        onAnswerSubmit={onAnswerSubmit}
                        onQuestionSubmit={() => onQuestionSubmit()}
                        totalQuestions={questions.length}
                        submittedAnswers={submittedAnswers}
                        setSubmittedAnswers={setSubmittedAnswers}
                      />)
                    })()
                  }
              </div>
          )
          else 
              return (
                <div className="test-container">
                  <EndTest 
                    submittedAnswers={submittedAnswers}
                    testinstanceId={testinstanceid}
                    onTestSubmit={onTestSubmit}
                  />
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