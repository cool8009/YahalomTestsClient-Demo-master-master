import QuestionComponent from "./QuestionComponent";
import React, { useEffect, useState } from "react";
import CompanyService from "../../services/ServicesFolder/CompanyService"
import FieldOfStudyService from "../../services/ServicesFolder/FieldOfStudyService"



const CreateTest = () => {
  const [questions, setQuestions ]= useState([])
  const [intro, setIntro]=useState('');    
  const [minimumToPass, setMinimumToPass]=useState(55);    
  const [title, setTitle]=useState('');    
  const [fieldOfStudyId, setFieldOfStudyId]=useState();
  const [companyId, setCompanyId]=useState();

  const allCompanyes = CompanyService.GetAllCompanys();
  const allFieldsOfStudy = FieldOfStudyService.GetAllFieldsOfStudy();
  const AddQuestion=(question)=>{
    setQuestions([...questions,question])
  }
  // onSubmit={onSubmit}
  return (
      <form className="add-form" >
        <div className="form-control">
          <label>Enter Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Enter Minimum To Pass</label>
          <input
            type="number"
            placeholder="Minimum To Pass"
            onChange={(e) => setMinimumToPass(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Enter Intro</label>
          <input
            type="text"
            placeholder="Intro"
            
          />
        </div>
        <div className="form-control form-control-check">
          <label>Check Intro</label>
          <input
            type="text"
            placeholder="Intro"
            
          />
        </div>
        <QuestionComponent onSubmit={AddQuestion} />
        <input className="btn" type="submit" value="Create Test" />
      </form>
    );
}

export default CreateTest
