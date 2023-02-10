import {
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
    <PageWrapper>
      <TitleWrapper>My Project</TitleWrapper>
      <Page>
        <ContentWrapper>
          <ContentTitle>I'm Good</ContentTitle>
          <ContentText>gkdl</ContentText>
        </ContentWrapper>
      </Page>
    </PageWrapper>
  );
};

export default Contact;
