import { Background, Content } from "./style";
import axios from "axios";
import React from "react";
import SideBar from "../Side/Side";

const About = () => {
  return (
    <Background>
      <SideBar />
      <Content>I'm Good</Content>
    </Background>
  );
};

export default About;
