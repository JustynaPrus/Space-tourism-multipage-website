import styled from "styled-components";

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
  }
  .inactive {
    display: none;
  }
  img {
    display: block;
  }
`;

export const Wrapper = styled.div`
  max-width: 40vw;
  margin-left: 9vw;
`;
