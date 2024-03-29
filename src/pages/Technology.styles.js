import styled from "styled-components";
import { device } from "./../BreakPoints";
import backgroundTechnology from "./../assets/technology/background-technology-desktop.jpg";
import backgroundTablet from "./../assets/technology/background-technology-desktop.jpg";
import backgroundMobile from "./../assets/technology/background-technology-desktop.jpg";

export const Container = styled.div`
  color: white;
  min-height: 100vh;
  background-image: url(${backgroundTechnology});
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

export const Wrapper = styled.div`
  margin-left: 13vw;
  padding-bottom: 80px;
  @media ${device.lg} {
    text-align: center;
    margin-left: 0;
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
    @media ${device.lg} {
      max-width: 100%;
    }
  }
  h2 {
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: 100;
    padding-bottom: 20px;
    @media ${device.lg} {
      padding-bottom: 60px;
    }
    span {
      font-weight: 400;
      opacity: 0.25;
    }
  }
`;
