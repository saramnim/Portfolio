import { NavMenu, NavWrap } from "./style";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../Route";
const NavBar = () => {
  return (
    <NavWrap>
      <Link to={"/"} className="sidemenu">
        Home
      </Link>
      <Link to={"/about"} className="sidemenu">
        About Me
      </Link>
      <Link to={"/project"} className="sidemenu">
        Project
      </Link>
      <Link to={"/contact"} className="sidemenu">
        Contact Me
      </Link>
    </NavWrap>
  );
};

export default NavBar;
