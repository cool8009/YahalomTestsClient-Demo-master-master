import QuestionComponent from "./CreateQuestionComponent";
import React, { useEffect, useState } from "react";
import CompanyService from "../../services/ServicesFolder/CompanyService"
import FieldOfStudyService from "../../services/ServicesFolder/FieldOfStudyService"
import TestService  from "../../services/ServicesFolder/TestService";

const CreateTest = () => {
  const [questions, setQuestions ]= useState([]);
  const [intro, setIntro]=useState('');    
  const [minimumToPass, setMinimumToPass]=useState(55);    
  const [title, setTitle]=useState('');    
  const [fieldOfStudyId, setFieldOfStudyId]=useState();
  const [companyId, setCompanyId]=useState();
 
  const [allCompanies, setAllCompanies] = useState([]);
  const [allFieldsOfStudy, setAllFieldsOfStudy] = useState([]);
  
  const selectedCompany = (company) => {
    setCompanyId = company.companyId;
  };

  const selectedFieldOfStudy = (fieldOfStudy) => {
    setFieldOfStudyId = fieldOfStudy.FieldOfStudyId;
  };

  useEffect(() => {
    const initializeAllCompanies = async () => {
      const allCompanyes = await CompanyService.GetAllCompanys()
        .catch(err => console.log(err));
      setAllCompanies(allCompanyes);
      initializeAllFieldsOfStudy();
    }
    const initializeAllFieldsOfStudy = async () => {
      const allFieldsOfStudy = await FieldOfStudyService.GetAllFieldsOfStudy();
      setAllFieldsOfStudy(allFieldsOfStudy);
    }
    initializeAllCompanies();
  }, [])

  const AddQuestion=(question)=>{
    setQuestions([...questions,question])
  }

  const SendTest=()=>{
    let test ={      
      Intro: intro,
      MinimumToPass: minimumToPass,
      Title: title,
      FieldOfStudyId: fieldOfStudyId,
      CompanyId: companyId
    } 
    TestService.AddTest({test: test , questions: questions});
  }

  return (
    <div className="homeContainer">

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
          <select onChange={selectedCompany}>
            {allCompanies.map((Company) => (
            <option id={Company.CompanyId}>{Company.CompanyName}</option>
          ))}
          </select>
        </div>
        <div className="form-control form-control-check">
          <label>check Field Of Study</label>
          <select onChange={selectedFieldOfStudy}>
            {allFieldsOfStudy.map((fieldOfStudy) => (
            <option id={fieldOfStudy.FieldOfStudyId}>{fieldOfStudy.FieldName}</option>
          ))}
          </select>
        </div>
        <div>
          <QuestionComponent AddQuestion={AddQuestion} />
        </div>
        <input className="btn" type="submit" value="Create Test" onClick={SendTest}/>
      </form>
    </div>
    );
}

export default CreateTest
