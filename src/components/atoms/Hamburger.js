import React from "react";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import { StyledImg } from "./Hamburger.styles";

const Hamburger = () => {
  return (
    <>
      <StyledImg src={hamburger} alt="menu hamburger" />
    </>
  );
};

export default Hamburger;
