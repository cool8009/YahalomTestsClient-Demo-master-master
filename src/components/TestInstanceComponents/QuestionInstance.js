import React, {useState, useEffect} from 'react'
import Answers from './Answers';

const QuestionInstance = ({ currentQuestion, currentAnswers, onQuestionSubmit, questionCounter, totalQuestions, onAnswerSubmit}) => {
    
    const [isChecked, setIsChecked] = useState(false);
    const [isTrueAnswers, setIsTrueAnswers] = useState(false);
    const [isTestDone, setIsTestDone] = useState(false);
    
    useEffect(() => {
        
        
    }, [])
  return (
    <div className='test-container'>
         
        <div>
          <p>{currentQuestion.Title}</p>
          <Answers 
            currentAnswers={currentAnswers} 
            isChecked={isChecked}
          />
          <button type='submit' onClick={() => { onQuestionSubmit(); onAnswerSubmit();}}>Submit</button>
          {
            <p>Current question: {questionCounter} / {totalQuestions}</p>} 
        </div>
        
        
               
    </div>
  )
}

export default QuestionInstance