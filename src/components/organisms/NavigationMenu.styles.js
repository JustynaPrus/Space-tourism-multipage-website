import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  position: relative;
  img {
    padding: 0 50px;
  }
  nav {
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    display: flex;
    padding: 30px 160px 30px 100px;
    font-weight: 200;
    letter-spacing: 2px;
    span {
      font-weight: 600;
    }
  }
`;

export const StyledLink = styled.p`
  color: white;
  text-decoration: none;
  padding: 0 15px;
  text-transform: uppercase;
`;

export const StyledDiv = styled.div`
  background-color: white;
  height: 1px;
  width: 473px;
  opacity: 0.25;
  position: absolute;
  left: 200px;
  z-index: 1;
`;
