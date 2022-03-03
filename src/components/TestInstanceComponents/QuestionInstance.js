import React, {useState, useEffect} from 'react'
import Answers from './Answers';

const QuestionInstance = ({ currentQuestion, currentAnswers, onQuestionSubmit, 
  questionCounter, totalQuestions, onAnswerSubmit,
  submittedAnswers, setSubmittedAnswers}) => {
    
    const [isChecked, setIsChecked] = useState(false);
    const [isTrueAnswers, setIsTrueAnswers] = useState(false);
    const [isTestDone, setIsTestDone] = useState(false);
    const [currentSubmittedAnswer, setCurrentSubmittedAnswer] = useState();
    const isSingleChoice = currentQuestion.IsSingleChoice;
    useEffect(() => {
        
        
    }, [])
  return (
    <div className='test-container'>
         
        <div>
          <p>{currentQuestion.Title}</p>
          <Answers 
            isSingleChoice={isSingleChoice}
            currentAnswers={currentAnswers} 
            isChecked={isChecked}
            currentSubmittedAnswer={currentSubmittedAnswer}
            setCurrentSubmittedAnswer={setCurrentSubmittedAnswer}
          />
          <button type='submit' onClick={() => { onQuestionSubmit(); onAnswerSubmit(currentSubmittedAnswer);}}>Submit</button>
          {
            <p>Current question: {questionCounter} / {totalQuestions}</p>} 
        </div>
        
        
               
    </div>
  )
}

export default QuestionInstance