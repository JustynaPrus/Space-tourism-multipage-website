import styled from "styled-components";
import { device } from "../../BreakPoints";

export const ContentWrapper = styled.div`
  h3 {
    font-weight: 100;
    text-transform: uppercase;
    font-size: 16px;
    opacity: 0.5;
    letter-spacing: 1px;
    padding-top: 80px;
  }
  .active {
    display: flex;
    justify-content: space-between;
    @media ${device.lg} {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
  .inactive {
    display: none;
  }
  img {
    display: block;
    @media ${device.lg} {
      max-width: 80%;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 40vw;
  margin-left: 9vw;
  @media ${device.lg} {
    max-width: 60vw;
    margin-left: 0;
    padding-top: 100px;
  }
`;
