import styled from "styled-components";
import { device } from "../../BreakPoints";

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const DotsContaner = styled.div`
  position: absolute;

  @media ${device.lg} {
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media ${device.xs} {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
