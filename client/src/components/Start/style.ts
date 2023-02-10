import styled from "styled-components";

export const Wrapper = styled.div`
  width: 82.5%;
  height: 50vh;
  background-color: pink;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 3%;
  border-radius: 100px;
  border: 10px solid black;
  // max-width: px;
  .picture {
    margin: 3%;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleName = styled.div`
  font-size: 10vh;
  font-weight: bold;
`;
export const Picture = styled.img`
  height: 30vh;
  width: 30vh;
  // margin: 100%;
  border-radius: 100px;
`;
export const TitleContent = styled.div`
  font-size: 5vh;
  text-decoration: underline;
`;
