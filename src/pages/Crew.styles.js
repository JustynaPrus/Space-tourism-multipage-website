import styled from "styled-components";
import { device } from "./../BreakPoints";
import backgroundCrew from "./../assets/crew/background-crew-desktop.jpg";
import backgroundTablet from "./../assets/crew/background-crew-tablet.jpg";
import backgroundMobile from "./../assets/crew/background-crew-mobile.jpg";

export const Container = styled.div`
  color: white;
  min-height: 100vh;
  background-image: url(${backgroundCrew});
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
    padding: 10px 0;
  }
  h2 {
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: 100;
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
    max-width: 70%;
    @media ${device.lg} {
      max-width: 100%;
    }
  }
  @media ${device.lg} {
    margin-left: 0;
    text-align: center;
  }
`;
