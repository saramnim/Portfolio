import React from "react";
// import About from "./components/About/About";
// import StartPage from "./components/Start/Start";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Side/Side";
// import Project from "./components/Project/Project";
// import Contact from "./components/Contact/Contact";
import { ROUTE, ROUTE_ARR } from "./Route";
// import { FullPage, Slide } from "react-full-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path={ROUTE.HOME.path} element={<StartPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} /> */}
          {ROUTE_ARR.map((route, index) => {
            return (
              <Route path={route.path} element={<route.element />} key={index} />
            );
          })}
        </Routes>
        {/* <StartPage />
            <About />
            <Project />
            <Contact /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
