import React from "react";
import {
  Container,
  StyledSection,
  Wrapper,
  StyledButton,
} from "./Home.styles.js";
import NavigationMenu from "../components/organisms/NavigationMenu";

const Home = () => {
  return (
    <Container>
      <NavigationMenu />
      <StyledSection>
        <Wrapper>
          <h3>So, you want to travel to </h3>
          <h1>Space</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </Wrapper>
        <StyledButton>Explore</StyledButton>
      </StyledSection>
    </Container>
  );
};

export default Home;
