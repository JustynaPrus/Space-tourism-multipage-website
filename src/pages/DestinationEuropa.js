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
import europa from "./../assets/destination/image-europa.png";

const DestinationEuropa = () => {
  return (
    <Container>
      <NavigationMenu />
      <StyledSection>
        <div>
          <h2>
            <span>01 </span>Pick your destination
          </h2>
          <img src={europa} alt="europa" />
        </div>
        <Wrapper>
          <DestinationMenu />
          <h1>Europa</h1>
          <StyledText>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover's dream. With an icy surface, it's perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </StyledText>
          <footer>
            <div>
              <SmallText>Avg. distance</SmallText>
              <StyledParagraph>628 mil. km</StyledParagraph>
            </div>
            <StyledDiv>
              <SmallText>Est. travel time</SmallText>
              <StyledParagraph>3 years</StyledParagraph>
            </StyledDiv>
          </footer>
        </Wrapper>
      </StyledSection>
    </Container>
  );
};

export default DestinationEuropa;
