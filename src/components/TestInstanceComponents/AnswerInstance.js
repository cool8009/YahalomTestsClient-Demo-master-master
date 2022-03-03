import React, {useState} from 'react'

const AnswerInstance = ({answer, currentSubmittedAnswer, setCurrentSubmittedAnswer, isSingleChoice}) => {
  
  return (
    <div>
        <input    
            type={isSingleChoice ? 'checkbox' : 'radio'}
            value={answer}
            onChange={(e) => setCurrentSubmittedAnswer(e.currentTarget.checked)}
            />
            <label>{answer.Content}</label>
            
    </div>
  )
}

export default AnswerInstance