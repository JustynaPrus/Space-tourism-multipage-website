import styled from "styled-components";
import backgroundDesktop from "./../assets/home/background-home-desktop.jpg";

export const Container = styled.div`
  color: white;
  min-height: 100vh;
  background-image: url(${backgroundDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 80px;
`;

export const Wrapper = styled.div`
  max-width: 30vw;
  margin-top: 80px;
  h1 {
    text-transform: uppercase;
    font-family: "Bellefair";
    font-weight: 200;
    font-size: 142px;
  }
  h3 {
    font-size: 34px;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 2px;
  }
  p {
    font-size: 18px;
    font-weight: 100;
    text-align: justify;
    line-height: 150%;
    letter-spacing: 1px;
  }
`;

export const StyledButton = styled.button`
  text-transform: uppercase;
  border: none;
  border-radius: 50%;
  background-color: white;
  font-family: "Bellefair";
  font-size: 32px;
  width: 274px;
  height: 274px;
  cursor: pointer;
`;
