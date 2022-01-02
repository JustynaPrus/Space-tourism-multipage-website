import styled from "styled-components";
import backgroundTechnology from "./../assets/technology/background-technology-desktop.jpg";

export const Container = styled.div`
  color: white;
  min-height: 100vh;
  background-image: url(${backgroundTechnology});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10vw;
  padding-bottom: 80px;
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
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const DotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  div.dot {
    color: white;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Bellefair";
    font-size: 32px;
    border: 1px solid rgb(255, 255, 255, 0.25);
    margin-bottom: 25px;
  }
  div.active {
    color: #0b0d17;
    background-color: white;
  }
`;

export const StyledSection = styled.div`
  width: 40vw;
  margin-left: 140px;
  position: absolute;
  h3 {
    font-weight: 100;
    text-transform: uppercase;
    font-size: 16px;
    opacity: 0.5;
    letter-spacing: 1px;
  }
  h1 {
    text-transform: uppercase;
    font-family: "Bellefair";
    font-weight: 100;
    font-size: 56px;
    padding: 5px 0;
  }
  p {
    line-height: 150%;
    font-weight: 100;
    font-size: 18px;
    letter-spacing: 1px;
    max-width: 80%;
  }
  div.slide {
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }
  div.active-anim {
    opacity: 1;
  }
`;
