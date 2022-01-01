import styled from "styled-components";
import backgroundDestination from "./../assets/destination/background-destination-desktop.jpg";

export const Container = styled.div`
  color: white;
  min-height: 100vh;
  background-image: url(${backgroundDestination});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Wrapper = styled.div`
  max-width: 30vw;
`;

export const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    text-transform: uppercase;
  }
`;
