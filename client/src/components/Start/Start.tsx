import {
  FirstTitle,
  FirstTitleContent,
  FirstTitleName,
  Picture,
} from "./style";
import axios from "axios";
import React from "react";
import { Background } from "../common/style";

const StartPage = () => {
  return (
    <Background>
      <FirstTitle>
        <FirstTitleName>Kim hye Ji</FirstTitleName>
        <FirstTitleContent>I'm very Good</FirstTitleContent>
      </FirstTitle>
    </Background>
  );
};

export default StartPage;
