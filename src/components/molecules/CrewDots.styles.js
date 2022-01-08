import styled from "styled-components";
import { device } from "../../BreakPoints";

export const DotsWrapper = styled.div`
  position: absolute;
  display: flex;
  @media ${device.sm} {
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  top: 400px;
  left: 0;

  @media ${device.lg} {
    top: 32%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .dot {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-bottom: 25px;
    margin-right: 20px;
    @media ${device.lg} {
      margin: 0 10px 25px 10px;
    }
  }
  .active-dot {
    color: #0b0d17;
    background-color: white;
  }
  .dot:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
