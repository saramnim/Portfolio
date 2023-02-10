import styled from "styled-components";

export const Background = styled.div`
  margin: 0% 0% 0% 16%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Page = styled.div`
  margin-left: 20px;
  width: 75.5vw;
  height: 100%;
  background-color: white;
  border-style: solid;
  border-width: 2vw;
  border-color: pink;
  display: flex;
  flex-direction: column;
  scrollY: auto;
`;

export const TitleWrapper = styled.div`
  font-size: 5vw;
  margin: 1vh 2vw;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  background-color: white;
  color: black;
  border-radius: 10px;
`;

export const ContentTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-decoration-line: none;
`;

export const ContentText = styled.ul`
  word-break: keep-all;
`;

export const ContentTextTitle = styled.li`
  font-size: 20px;
`


export const URLs = styled.a`
  color: #7c7de4;
  text-decoration-line: none;
  font-weight: bold;
`;

export const ClickButton = styled.button`
  font-size: 20px;
  color: pink;
  // font-weight: bold;
  border: none;
  background-color: white;
  cursor: pointer;
  :hover {
    color: #ffdcff;
  }
`;