import React, {useState} from 'react'

const AnswerInstance = ({answer}) => {
  const [isSingleChoice, setIsSingleChoice] = useState(answer.IsSingleChoice);
  return (
    <div>
        <input    
            type={isSingleChoice ? 'checkbox' : 'radio'}
            value={answer.Content}
            />
            <label>{answer.Content}</label>
            
    </div>
  )
}

export default AnswerInstance