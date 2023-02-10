import {
  Picture,
  TitleContent,
  TitleName,
  TitleWrapper,
  Wrapper,
} from "./style";
import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <Wrapper>
      <Link to="/about" className="picture">
        <Picture src="/images/사진.jpg" />
      </Link>
      <TitleWrapper>
        <TitleName>Kim Hye Ji</TitleName>
        <TitleContent>Front-End Developer</TitleContent>
      </TitleWrapper>
    </Wrapper>
  );
};

export default StartPage;
