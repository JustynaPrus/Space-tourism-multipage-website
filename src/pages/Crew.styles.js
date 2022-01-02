import styled from "styled-components";
import backgroundCrew from "./../assets/crew/background-crew-desktop.jpg";

export const Container = styled.div`
  color: white;
  min-height: 100vh;
  background-image: url(${backgroundCrew});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledSection = styled.div`
  max-width: 40vw;
  margin-left: 10vw;
  h3 {
    font-family: "Bellefair";
    font-weight: 100;
    text-transform: uppercase;
    font-size: 32px;
    opacity: 0.5;
  }
  h1 {
    text-transform: uppercase;
    font-family: "Bellefair";
    font-weight: 100;
    font-size: 56px;
  }
  h2 {
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: 100;
    padding-bottom: 100px;
    span {
      font-weight: 400;
      opacity: 0.25;
    }
  }
  p {
    line-height: 150%;
    font-weight: 100;
    font-size: 18px;
    letter-spacing: 1px;
    max-width: 80%;
  }
`;
