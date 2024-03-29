import styled from "styled-components";
import { device } from "../../BreakPoints";

export const ContentWrapper = styled.div`
  display: flex;
  h3 {
    font-weight: 100;
    text-transform: uppercase;
    font-size: 16px;
    opacity: 0.5;
    letter-spacing: 1px;
    padding-top: 100px;
    @media ${device.lg} {
      padding-top: 50px;
    }
  }
  .active {
    display: flex;
    justify-content: space-between;
    @media ${device.xs} {
      align-items: center;
    }
    @media ${device.lg} {
      flex-direction: column;
      align-items: center;
    }
  }
  .inactive {
    display: none;
  }
  img {
    display: block;
    padding-right: 4vw;
    padding-top: 10vw;
    @media ${device.lg} {
      padding-right: 0px;
      max-width: 60vw;
    }
  }
  @media ${device.lg} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  max-width: 45vw;
  @media ${device.lg} {
    max-width: 80vw;
  }
`;
