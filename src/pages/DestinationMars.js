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
import mars from "./../assets/destination/image-mars.png";

const DestinationMars = () => {
  return (
    <Container>
      <NavigationMenu />
      <StyledSection>
        <div>
          <h2>
            <span>01 </span>Pick your destination
          </h2>
          <img src={mars} alt="mars" />
        </div>
        <Wrapper>
          <DestinationMenu />
          <h1>Mars</h1>
          <StyledText>
            Don't forget to pack your hiking boots. You'll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It's two and a half times the size of Everest!
          </StyledText>
          <footer>
            <div>
              <SmallText>Avg. distance</SmallText>
              <StyledParagraph>225 mil. km</StyledParagraph>
            </div>
            <StyledDiv>
              <SmallText>Est. travel time</SmallText>
              <StyledParagraph>9 months</StyledParagraph>
            </StyledDiv>
          </footer>
        </Wrapper>
      </StyledSection>
    </Container>
  );
};

export default DestinationMars;
