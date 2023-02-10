import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Background } from "./components/common/style";
import Header from "./components/Header/header";
import NavBar from "./components/Navbar/Nav";
import { ROUTE, ROUTE_ARR } from "./Route";

function App() {
  return (
    <div className="App">
      <Background>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            {/* <Route path={ROUTE.HOME.path} element={<StartPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} /> */}
            {ROUTE_ARR.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={<route.element />}
                  key={index}
                />
              );
            })}
          </Routes>
          {/* <StartPage />
            <About />
            <Project />
            <Contact /> */}
        </BrowserRouter>
      </Background>
    </div>
  );
}

export default App;
