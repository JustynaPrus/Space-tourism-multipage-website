import React from "react";
import {
  Container,
  StyledSection,
  Wrapper,
  StyledParagraph,
  StyledDiv,
  StyledText,
  SmallText,
} from "./Destination.styles";
import NavigationMenu from "../components/organisms/NavigationMenu";
import DestinationMenu from "../components/organisms/DestinationMenu";
import moon from "./../assets/destination/image-moon.png";

const Destination = () => {
  return (
    <Container>
      <NavigationMenu />
      <StyledSection>
        <div>
          <h2>
            <span>01 </span>Pick your destination
          </h2>
          <img src={moon} alt="moon" />
        </div>
        <Wrapper>
          <DestinationMenu />
          <h1>Moon</h1>
          <StyledText>
            See our planet as you've never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you're there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </StyledText>
          <footer>
            <div>
              <SmallText>Avg. distance</SmallText>
              <StyledParagraph>384,400 km</StyledParagraph>
            </div>
            <StyledDiv>
              <SmallText>Est. travel time</SmallText>
              <StyledParagraph>3 days</StyledParagraph>
            </StyledDiv>
          </footer>
        </Wrapper>
      </StyledSection>
    </Container>
  );
};

export default Destination;
