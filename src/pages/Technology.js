import React from "react";
import { Container, Wrapper } from "./Technology.styles";
import NavigationMenu from "../components/organisms/NavigationMenu";
import Slider from "../components/organisms/Slider";

const Technology = () => {
  return (
    <Container>
      <NavigationMenu />
      <Wrapper>
        <h2>
          <span>03 </span>Space launch 101
        </h2>
        <Slider />
      </Wrapper>
    </Container>
  );
};

export default Technology;
