import styled from "styled-components";
import backgroundDestination from "./../assets/destination/background-destination-desktop.jpg";

export const Container = styled.div`
  color: white;
  min-height: 100vh;
  background-image: url(${backgroundDestination});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Wrapper = styled.div`
  max-width: 30vw;
  h1 {
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
  }
`;

export const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 80px;
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
  margin-left: 70px;
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
