import React from "react";
import { Container, Wrapper, StyledSection } from "./Crew.styles";
import NavigationMenu from "../components/organisms/NavigationMenu";
import douglasHurley from "./../assets/crew/image-douglas-hurley.png";

const Crew = () => {
  return (
    <Container>
      <NavigationMenu />
      <Wrapper>
        <StyledSection>
          <h2>
            <span>02 </span>Meet your crew
          </h2>
          <h3>Commander</h3>
          <h1>Douglas Hurley</h1>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </StyledSection>
        <img src={douglasHurley} alt="douglasHurley" />
      </Wrapper>
    </Container>
  );
};

export default Crew;
