import styled from "styled-components";
import { device } from "./../BreakPoints";
import backgroundDestination from "./../assets/destination/background-destination-desktop.jpg";
import backgroundTablet from "./../assets/destination/background-destination-tablet.jpg";
import backgroundMobile from "./../assets/destination/background-destination-mobile.jpg";

export const Container = styled.div`
  color: white;
  min-height: 100vh;
  background-image: url(${backgroundDestination});
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
  max-width: 30vw;
  h1 {
    @media ${device.xs} {
      font-size: 72px;
    }
    font-family: "Bellefair";
    text-transform: uppercase;
    font-weight: 100;
    font-size: 100px;
  }
  footer {
    display: flex;
    text-transform: uppercase;
    padding-top: 20px;
    margin-top: 50px;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    @media ${device.lg} {
      flex-direction: column;
      justify-content: center;
    }
  }
  @media ${device.lg} {
    max-width: 60vw;
    text-align: center;
  }
`;

export const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 80px;
  @media ${device.lg} {
    flex-direction: column;
    text-align: center;
  }
  img {
    @media ${device.lg} {
      margin-bottom: 30px;
      max-width: 80vw;
    }
  }
  h2 {
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: 100;
    padding-bottom: 70px;
    span {
      font-weight: 400;
      opacity: 0.25;
    }
  }
`;

export const StyledDiv = styled.div`
  margin: 0 35px;
  @media ${device.lg} {
    margin: 0 50px;
    padding-top: 25px;
  }
`;

export const SmallText = styled.p`
  font-weight: 100;
  font-size: 14px;
  letter-spacing: 1px;
`;

export const StyledParagraph = styled.p`
  font-family: "Bellefair";
  font-size: 24px;
  padding-top: 10px;
`;

export const StyledText = styled.p`
  line-height: 150%;
  font-weight: 100;
  font-size: 18px;
  letter-spacing: 1px;
`;
