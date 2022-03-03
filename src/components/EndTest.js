import React, {useState, useEffect} from 'react'

const EndTest = ({submittedAnswer, testinstanceid, onTestSubmit}) => {
  useEffect(() => {

  }, [])
  return (
    <div>
      Thank you! to submit your results press submit.
      <button type='submit' onClick={() => onTestSubmit(testinstanceid)}>Submit</button>
      
    </div>
  )
}

export default EndTest