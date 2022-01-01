import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, StyledLink, StyledDiv } from "./NavigationMenu.styles";
import logo from "../../assets/shared/logo.svg";

const NavigationMenu = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <StyledDiv></StyledDiv>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <StyledLink>
            <span>00</span> Home
          </StyledLink>
        </Link>
        <Link to="/destination" style={{ textDecoration: "none" }}>
          <StyledLink>
            <span>01</span> Destination
          </StyledLink>
        </Link>
        <Link to="/crew" style={{ textDecoration: "none" }}>
          <StyledLink>
            <span>02</span> Crew
          </StyledLink>
        </Link>
        <Link to="/technology" style={{ textDecoration: "none" }}>
          <StyledLink>
            <span>03</span> Technology
          </StyledLink>
        </Link>
      </nav>
    </Wrapper>
  );
};

export default NavigationMenu;
