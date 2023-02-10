import styled from "styled-components";

export const NavWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  position: relative;
  .sidemenu {
    background-color: white;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 2vh;
    padding: 0.5rem;
    color: black;
    text-decoration-line: none;
    font-size: 25px;
  }
`;

export const NavMenu = styled.a`
  background-color: white;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 2vh;
  padding: 0.5rem;
  color: black;
  text-decoration-line: none;
`;
