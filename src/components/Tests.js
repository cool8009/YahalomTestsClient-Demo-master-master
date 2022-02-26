import React, { useEffect, useState } from "react";
import TestCard from "./TestCard";
import TestService from "../services/ServicesFolder/TestService"


const Tests = () => {
  const [tests, setTests] = useState([]);
  const getAllTests = async () => {
    const res = await TestService.GetAllTests();
    return res;
  };
  useEffect(() => {
    const getTests = async () => {
      const testsFromServer = await getAllTests();
      setTests(testsFromServer);
    };

    getTests();
  }, []);

  return (
    <div className="container">
      {tests.map((test) => (
        <TestCard key={test.id} test={test} />
      ))}
    </div>
  );
};

export default Tests;
