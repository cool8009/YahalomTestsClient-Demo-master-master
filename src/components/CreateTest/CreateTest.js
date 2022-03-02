import QuestionComponent from "./QuestionComponent";
import React, { useEffect, useState } from "react";
import CompanyService from "../../services/ServicesFolder/CompanyService"
import FieldOfStudyService from "../../services/ServicesFolder/FieldOfStudyService"



const CreateTest = () => {
  const [questions, setQuestions ]= useState([]);
  const [intro, setIntro]=useState('');    
  const [minimumToPass, setMinimumToPass]=useState(55);    
  const [title, setTitle]=useState('');    
  const [fieldOfStudyId, setFieldOfStudyId]=useState();
  const [companyId, setCompanyId]=useState();

  const allCompanyes = CompanyService.GetAllCompanys();
  const allFieldsOfStudy = FieldOfStudyService.GetAllFieldsOfStudy();

  const [companyes, setCompanyes ]= useState([]);
  const [fieldsOfStudy, setFieldsOfStudy ]= useState([])

  const AddQuestion=(question)=>{
    setQuestions([...questions,question])
  }

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
            onChange={(e) => setIntro(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>check company</label>
          <select 
                   isMulti = {false}
                   options={allCompanyes}
                   onChange={(e) => setCompanyes(e.target.value.CompanyId)}/>
        </div>
        <div className="form-control form-control-check">
          <label>check Field Of Study</label>
          <select 
                   isMulti = {false}
                   options={allFieldsOfStudy}
                   onChange={(e) => setFieldsOfStudy(e.target.value.FieldOfStudyId)}/>
        </div>
        <div>
          <QuestionComponent AddQuestion={AddQuestion} />
        </div>
        <input className="btn" type="submit" value="Create Test" />
      </form>
    );
}

export default CreateTest
