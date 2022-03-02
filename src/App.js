import Home from "./components/Home";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Questions from "./components/Questions";
import Tests from "./components/Tests";
import 'bootstrap/dist/css/bootstrap.min.css';
import TestInstance from "./components/TestInstance";
import TestInstanceForm from "./components/TestInstanceForm";
import CreateTest from "./components/CreateTest/CreateTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/tests" element={<Tests />} />       
        <Route path="/test/:id" element={<TestInstance />} />       
        <Route path="/test/:id/:testinstanceid" element={<TestInstance />} />       
        <Route path="/testform/:id" element={<TestInstanceForm />} />       
        <Route path="/createtest" element={<CreateTest />} />       
      </Routes>
    </Router>
  );
}

export default App;
