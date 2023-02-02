import { Background, ContentWrapper, Content, TitleWrapper } from "../common/style";
import axios from "axios";
import React from "react";
import SideBar from "../Side/Side";
import { AboutText, AboutTitle, AboutWrapper } from "./style";

const About = () => {
  return (
    <Background>
      <ContentWrapper>
        <Content>
          <TitleWrapper>about me</TitleWrapper>
          <AboutWrapper>
            <AboutTitle>I'm Good</AboutTitle>
            <AboutText>gkdl</AboutText>
          </AboutWrapper>
        </Content>
        <Content>I'm Good</Content>
        <Content>I'm Good</Content>
        <Content>I'm Good</Content>
      </ContentWrapper>
    </Background>
  );
};

export default About;
