import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Jua", sans-serif;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
`;

export const Page = styled.div`
  height: 100%;
  background-color: white;
  border-style: solid;
  border-width: 2vw;
  border-color: pink;
  display: flex;
  flex-direction: column;
  width: 82.5%;
`;

export const TitleWrapper = styled.div`
  font-size: 5vw;
  margin: 1vh 2vw;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // padding: 2%;
  height: 10vh;
  color: black;
  border-radius: 10px;
  // justify-content: space-around;
`;

export const ContentTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-decoration-line: none;
`;

export const ContentText = styled.ul`
  word-break: keep-all;
`;

export const ContentTextTitle = styled.a`
  font-size: 20px;
  font-weight: bold;
`


export const URLs = styled.a`
  color: #7c7de4;
  text-decoration-line: none;
  font-weight: bold;
`;

export const ClickButton = styled.button`
  font-size: 30px;
  margin: 10px;
  color: pink;
  font-weight: bold;
  border: none;
  background-color: white;
  cursor: pointer;
  :hover {
    color: #ffdcff;
  }
`;