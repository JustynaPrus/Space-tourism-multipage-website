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
import titan from "./../assets/destination/image-titan.png";

const DestinationTitan = () => {
  return (
    <Container>
      <NavigationMenu />
      <StyledSection>
        <div>
          <h2>
            <span>01 </span>Pick your destination
          </h2>
          <img src={titan} alt="titan" />
        </div>
        <Wrapper>
          <DestinationMenu />
          <h1>Titan</h1>
          <StyledText>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </StyledText>
          <footer>
            <div>
              <SmallText>Avg. distance</SmallText>
              <StyledParagraph>1.6 bil. km</StyledParagraph>
            </div>
            <StyledDiv>
              <SmallText>Est. travel time</SmallText>
              <StyledParagraph>7 years</StyledParagraph>
            </StyledDiv>
          </footer>
        </Wrapper>
      </StyledSection>
    </Container>
  );
};

export default DestinationTitan;
