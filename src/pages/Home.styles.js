import styled from "styled-components";
import { device } from "./../BreakPoints";
import backgroundDesktop from "./../assets/home/background-home-desktop.jpg";
import backgroundTablet from "./../assets/home/background-home-tablet.jpg";
import backgroundMobile from "./../assets/home/background-home-mobile.jpg";

export const Container = styled.div`
  color: white;
  min-height: 100vh;
  background-image: url(${backgroundDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media ${device.lg} {
    background-image: url(${backgroundTablet});
  }
  @media ${device.sm} {
    background-image: url(${backgroundMobile});
  }
`;

export const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 80px;
  @media ${device.lg} {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  max-width: 30vw;
  margin-top: 80px;
  h1 {
    text-transform: uppercase;
    font-family: "Bellefair";
    font-weight: 200;
    font-size: 142px;
    @media ${device.lg} {
      text-align: center;
    }
  }
  h3 {
    font-size: 34px;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 2px;
    @media ${device.lg} {
      text-align: center;
    }
  }
  p {
    font-size: 18px;
    font-weight: 100;
    text-align: justify;
    line-height: 150%;
    letter-spacing: 1px;
    @media ${device.lg} {
      text-align: center;
      margin-bottom: 160px;
    }
  }
  @media ${device.lg} {
    max-width: 60vw;
  }
`;

export const StyledButton = styled.button`
  text-transform: uppercase;
  border-radius: 50%;
  border: none;
  outline: 88px solid rgba(255, 255, 255, 0);
  background-color: white;
  font-family: "Bellefair";
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
  height: 274px;
  cursor: pointer;
  &:hover {
    outline: 88px solid rgba(255, 255, 255, 0.15);
  }
`;
