import React from "react";
import close from "../../assets/shared/icon-close.svg";
import { StyledImg } from "./CloseIcon.styles";

const CloseIcon = () => {
  return (
    <>
      <StyledImg src={close} alt="close" />
    </>
  );
};

export default CloseIcon;
