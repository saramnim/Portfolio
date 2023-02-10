import styled from "styled-components";

export const NavWrap = styled.div`
  background-color: black;
  width: 10vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15vh 3vw;
  position: fixed;
  .sidemenu {
    background-color: white;
    box-sizing: border-box;
    border-radius: 5px;
    width: 10vw;
    margin-bottom: 2vh;
    padding: 0.5rem;
    color: black;
    text-decoration-line: none;
  }
`;

export const Picture = styled.img`
  margin-bottom: 10vh;
  padding: 0.5vh;
  border: 1px solid white;
`;

export const NavMenu = styled.a`
  background-color: white;
  box-sizing: border-box;
  border-radius: 5px;
  width: 10vw;
  margin-bottom: 2vh;
  padding: 0.5rem;
  color: black;
  text-decoration-line: none;
`;
