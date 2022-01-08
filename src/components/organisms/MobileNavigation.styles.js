import styled from "styled-components";
import { device } from "../../BreakPoints";

export const Container = styled.nav`
  display: none;
  justify-content: flex-end;
  img {
    cursor: pointer;
    padding: 20px;
  }
  @media ${device.xs} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
