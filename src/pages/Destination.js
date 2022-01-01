import React from "react";
import { Container, StyledSection, Wrapper } from "./Destination.styles";
import NavigationMenu from "../components/organisms/NavigationMenu";
import DestinationMenu from "../components/organisms/DestinationMenu";
import moon from "./../assets/destination/image-moon.png";

const Destination = () => {
  return (
    <Container>
      <NavigationMenu />
      <StyledSection>
        <div>
          <h2>01 Pick your destination</h2>
          <img src={moon} alt="moon" />
        </div>
        <Wrapper>
          <DestinationMenu />
          <h1>Moon</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <p>Avg. distance 384,400 km </p>
          <p>Est. travel time 3 days</p>
        </Wrapper>
      </StyledSection>
    </Container>
  );
};

export default Destination;
