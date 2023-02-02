import React from 'react';
import About from "./components/About/About";
import StartPage from "./components/Start/Start";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import SideBar from './components/Side/Side';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
