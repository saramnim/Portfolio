import {
  ContentWrapper,
  TitleWrapper,
  URLs,
  ClickButton,
  Page,
  PageWrapper,
  ContentText,
  ContentTitle,
  ContentTextTitle,
} from "../common/style";
import axios from "axios";
import React, { ReactEventHandler, useState } from "react";

const About = () => {
  // const [contentOpen, setContentOpen] = useState(false);
  // const openContent = () => {
  //   setContentOpen(!contentOpen);
  //   console.log();
  // };
  const [introduceOpen, setIntroduceOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const openIntroduce = () => {
    setIntroduceOpen(!introduceOpen);
    console.log();
  };
  const openComment = () => {
    setCommentOpen(!commentOpen);
    console.log();
  };
  const openSkills = () => {
    setSkillsOpen(!skillsOpen);
    console.log();
  };
  return (
    <PageWrapper>
      <TitleWrapper>&nbsp;About me</TitleWrapper>
      <Page>
        <ContentWrapper>
          <ContentTitle>
            <ClickButton onClick={openIntroduce}>+</ClickButton>I Introduce
          </ContentTitle>
          {introduceOpen && (
            <ContentText>
              각광받는 시니어 개발자를 꿈꾸는 김혜지입니다!
              <br />
              개발 공부 과정을 정리한
              <URLs href="https://velog.io/@saramnim"> 벨로그</URLs>를 운영 중
              이예요.
              <br />
              계획을 세우고 움직이는 것을 좋아해요.
              <br />
              무엇이든 개발하는 개발자로 성장하기 위해 노력하고 있습니다.
              <br />
              Email | hyejis@kakao.com
            </ContentText>
          )}
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle>
            <ClickButton onClick={openComment}>+</ClickButton>I Comment
          </ContentTitle>
          {commentOpen && (
            <ContentText className="aboutText">
              {/* ‘동물 복지’에 관심이 있습니다.
              <br />
              안녕하세요, 5년 후 동물 복지를 위해 힘을 보탤 개발자입니다.
              <br />
              <br />
              현재 햄스터를 키우고 있는 저는, 햄스터가 아픈 상황임에도 진료해 줄
              병원을 찾기조차 쉽지 않았습니다.
              <br />
              주류 동물들의 병원이 10개인 데에 비해 소동물의 병원은 1개인 처참한
              비율 때문 입니다.
              <br />
              그마저도 인터넷에 검색해야 알 수 있는 정보로 반려인들이 동물
              병원의 진료 동물을 파악하기 어렵습니다.
              <br />
              <br />
              저는 이러한 상황에서 반려인들과 동물들을 위해 한 발 보탬이 될 수
              있도록 2년 후에는 소동물 진료가 가능한 동물 병원을 알려주는
              웹사이트를 만들 것입니다.
              <br />
              5년 후에는 소동물 뿐만이 아닌 특수 동물을 포함해 모든 반려 동물과
              반려인들의 삶을 유익하게 만들어줄 웹사이트를 최종적으로 런칭할
              것입니다.
              <br />
              이렇듯 노력하여 5년 후에는 아픈 동물들이 신속히 진료 및 치료를
              받을 수 있는 날을 만들겠습니다. */}
              <ContentTextTitle>
                ‘개발’에 관심이 많습니다 - 전공을 벗어난 이유
              </ContentTextTitle>
              <br />
              안녕하세요, 새로운 도전을 좋아하는 신입 웹 개발자 김혜지 입니다.
              <br />
              졸업 후에도 개발에 대한 열망을 놓고 싶지 않아 새로운 분야인 웹
              개발에 도전했습니다.
              <br />
              현재는 한정된 스택에 집중하지만 좋은 UX를 만들기 위해 언어를
              가리지 않는 개발자가 되겠습니다.
            </ContentText>
          )}
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle>
            <ClickButton onClick={openSkills}>+</ClickButton>
            My Skills
          </ContentTitle>
          {skillsOpen && (
            <ContentText>
              <ContentTextTitle>Tool</ContentTextTitle>
              <br />- GitHub, GitLab <br />
              - Notion, Jira, Figma
              <br />
              <ContentTextTitle>Language</ContentTextTitle>
              <br />- HTML5, CSS3(SCSS) <br />- JavaScript(ES6), Typescript{" "}
              <br />
              <ContentTextTitle>Library</ContentTextTitle>
              <br />- React, Styled-components
            </ContentText>
          )}
        </ContentWrapper>
      </Page>
    </PageWrapper>
  );
};

export default About;
