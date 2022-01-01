import React from "react";
import { Container, Wrapper, StyledSection } from "./Technology.styles";
import NavigationMenu from "../components/organisms/NavigationMenu";
import launchVehicle from "./../assets/technology/image-launch-vehicle-portrait.jpg";

const Technology = () => {
  return (
    <Container>
      <NavigationMenu />
      <Wrapper>
        <StyledSection>
          <h2>03 Space launch 101</h2>
          <h3>1 2 3 The terminology...</h3>
          <h1>Launch vehicle</h1>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </StyledSection>
        <img src={launchVehicle} alt="launchVehicle" />
      </Wrapper>
    </Container>
  );
};

export default Technology;
