import React from "react";
import { Container, Wrapper } from "./Crew.styles";
import CrewSlider from "../components/organisms/CrewSlider";
import NavigationMenu from "../components/organisms/NavigationMenu";

const Crew = () => {
  return (
    <Container>
      <NavigationMenu />
      <Wrapper>
        <h2>
          <span>02 </span>Meet your crew
        </h2>
        <CrewSlider />
      </Wrapper>
    </Container>
  );
};

export default Crew;
