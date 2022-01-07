import styled from "styled-components";

export const DotsWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 400px;
  left: 0;
  .dot {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-bottom: 25px;
    margin-right: 20px;
  }

  .active-dot {
    color: #0b0d17;
    background-color: white;
  }
  .dot:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
