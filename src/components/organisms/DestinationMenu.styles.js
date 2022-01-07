import styled from "styled-components";
import { device } from "../../BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  list-style: none;
  @media ${device.lg} {
    justify-content: center;
  }
`;

export const StyledLink = styled.li`
  color: white;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 0;
  margin: 20px 20px 20px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  &:hover {
    border-bottom: 2px solid white;
  }
`;
