import React from 'react'

const AnswerInstance = ({answer}) => {
  return (
    <div>
        <input 
            type='checkbox'
            value={answer.Content}
            
            />
            <label>{answer.Content}</label>
            
    </div>
  )
}

export default AnswerInstance