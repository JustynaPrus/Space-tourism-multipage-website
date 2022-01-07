import React from "react";
import { Wrapper, StyledDiv, StyledImg } from "./NavigationMenu.styles";
import logo from "../../assets/shared/logo.svg";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavigationMenu = () => {
  return (
    <Wrapper>
      <StyledImg src={logo} alt="logo" />
      <StyledDiv></StyledDiv>
      <Navigation />
      <MobileNavigation />
    </Wrapper>
  );
};

export default NavigationMenu;
