import {
  Background,
  ContentWrapper,
  TitleWrapper,
  Page,
  PageWrapper,
  ContentText,
  ContentTitle,
} from "../common/style";
import axios from "axios";
import React from "react";

const Contact = () => {
  return (
    <Background>
      <PageWrapper>
        <TitleWrapper>My Project</TitleWrapper>
        <Page>
          <ContentWrapper>
            <ContentTitle>I'm Good</ContentTitle>
            <ContentText>gkdl</ContentText>
          </ContentWrapper>
        </Page>
      </PageWrapper>
    </Background>
  );
};

export default Contact;
