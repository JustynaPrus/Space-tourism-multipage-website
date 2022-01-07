import styled from "styled-components";
import { device } from "../../BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  position: relative;
  @media ${device.lg} {
    padding: 0 0 50px 0;
  }

  img {
    padding: 0 50px;
  }
  nav {
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    display: flex;
    padding: 0 12vw 0 8vw;
    font-weight: 200;
    letter-spacing: 2px;
    @media ${device.lg} {
      padding: 0 4vw 0 4vw;
    }
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
  width: 34vw;
  opacity: 0.25;
  position: absolute;
  left: 180px;
  z-index: 1;
  @media ${device.lg} {
    display: none;
  }
`;
