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
    align-items: flex-start;
  }
`;

export const StyledImg = styled.img`
  padding: 0 50px;
  @media ${device.lg} {
    padding: 20px;
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
