import Home from "./components/Home";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Questions from "./components/Questions";
import Tests from "./components/Tests";
import 'bootstrap/dist/css/bootstrap.min.css';
import TestInstance from "./components/TestInstance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/tests" element={<Tests />} />       
        <Route path="/test/:id" element={<TestInstance />} />       
      </Routes>
    </Router>
  );
}

export default App;
