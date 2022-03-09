import React, {useState} from 'react'

const AnswerInstance = ({answer}) => {
  // type={isSingleChoice ? 'checkbox' : 'radio'}
  
  return (
    <div>
        <input    
            value={answer.Content}
            />
            <label>{answer.Content}</label>
            
    </div>
  )
}

export default AnswerInstance