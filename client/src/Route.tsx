import React from "react";
import About from "./components/About/About";
import StartPage from "./components/Start/Start";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: StartPage,
  },
  ABOUT: {
    path: "/about",
    link: "/about",
    element: About,
  },
  PROJECT: {
    path: "/project",
    link: "/project",
    element: Project,
  },
  CONTACT: {
    path: "/contact",
    link: "/contact",
    element: Contact,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);