import styled from "styled-components";
import { device } from "../../BreakPoints";

export const Container = styled.nav`
  display: none;
  justify-content: flex-end;
  @media ${device.xs} {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledNav = styled.nav`
  display: none;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 0 12vw 0 8vw;
  font-weight: 200;
  letter-spacing: 2px;
  span {
    font-weight: 600;
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
  @media ${device.lg} {
    padding: 20px 6px;
  }
`;
