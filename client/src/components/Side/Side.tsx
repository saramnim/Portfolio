import { Picture, SideMenu, SideWrap } from "./style";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <SideWrap>
      <Picture src="/images/사진.jpg" />
      <SideMenu href="/">Home</SideMenu>
      <SideMenu href="/about">About Me</SideMenu>
      <SideMenu>Project</SideMenu>
      <SideMenu>this is menu</SideMenu>
      <SideMenu>this is menu</SideMenu>
      <SideMenu>Contact Me</SideMenu>
    </SideWrap>
  );
};

export default SideBar;
