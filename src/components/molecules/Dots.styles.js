import styled from "styled-components";

export const DotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 6vw;
  .dot {
    cursor: pointer;
    color: white;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Bellefair";
    font-size: 32px;
    border: 1px solid rgb(255, 255, 255, 0.25);
    margin-bottom: 25px;
  }

  .active-dot {
    color: #0b0d17;
    background-color: white;
  }
  .dot:hover {
    border: 1px solid rgb(255, 255, 255);
  }
`;
