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
    padding: 0 160px 0 100px;
    font-weight: 200;
    letter-spacing: 2px;
    span {
      font-weight: 600;
    }
  }
`;

export const StyledLink = styled.li`
  color: white;
  text-decoration: none;
  padding: 30px 15px;
  text-transform: uppercase;
  list-style: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  &:hover {
    border-bottom: 2px solid white;
  }
`;

export const StyledDiv = styled.div`
  background-color: white;
  height: 1px;
  width: 473px;
  opacity: 0.25;
  position: absolute;
  left: 180px;
  z-index: 1;
`;
