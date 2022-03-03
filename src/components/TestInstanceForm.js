import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import TestInstanceService from '../services/ServicesFolder/TestInstanceService'

const TestInstanceForm = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    let { id } = useParams();
    let navigate = useNavigate();
    const createTestInstance = async (TestInstance) => {
        const testinstanceid = await TestInstanceService.AddTestInstance(TestInstance);
        return testinstanceid;
        
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
          alert("Please enter an email");
        }
        if (!firstName) {
          alert("Please enter a first name");
        }
        if (!lastName) {
          alert("Please enter a last name");
        }
        let TestId = id;
        let Email = email;
        let FirstName = firstName;
        let LastName = lastName;
        const value = await createTestInstance({ TestId ,Email, FirstName, LastName })
            .then((res) => {return res.data})
            .then((res) => navigate('/test/' + id + '/' + res)
        
            )};

      return (
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <label>Enter Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Enter First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control form-control-check">
            <label>Enter Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input className="btn" type="submit" value="Start Test" />
        </form>
      );
}

export default TestInstanceForm