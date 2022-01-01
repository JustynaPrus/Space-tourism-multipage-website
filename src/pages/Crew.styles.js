import styled from "styled-components";
import backgroundCrew from "./../assets/crew/background-crew-desktop.jpg";

export const Container = styled.div`
  color: white;
  min-height: 100vh;
  background-image: url(${backgroundCrew});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledSection = styled.div`
  max-width: 30vw;
  h1,
  h2,
  h3 {
    text-transform: uppercase;
  }
`;
