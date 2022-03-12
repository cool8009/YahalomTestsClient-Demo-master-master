import React, { useEffect } from 'react'
import { useNavigate, } from "react-router-dom";
import AnswerInstanceService from "../services/ServicesFolder/AnswerInstanceService";


const EndTest = ({submittedAnswers, testinstanceid}) => {
  let navigate = useNavigate();
  useEffect(() => {
    const sendUserAnswers = async () => {
      await AnswerInstanceService.AddAnswerInstance({submittedAnswers, testinstanceid})
    };
    sendUserAnswers();
  }, []);

  return (
    //send answer ids to api to create answerinstances
    //send info to reportservice


    <div>
      <p style={{textAlign: 'center'}}> Thank you! results will be mailed to you.</p>
      <button className="btn" onClick={() => navigate("/")}
          style={{ backgroundColor: "green",
          textAlign: "center", display: "flex",
          justifyContent: "space-between",
          margin: "50px auto" }}>
          Go To Home Page
        </button>
    </div>
  )
}

export default EndTest