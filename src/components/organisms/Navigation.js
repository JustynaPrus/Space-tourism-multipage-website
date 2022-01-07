import React from "react";
import { Link } from "react-router-dom";
import { StyledNav, StyledLink } from "./Navigation.styles";

const Navigation = () => {
  return (
    <StyledNav>
      <Link
        to="/Space-tourism-multipage-website/"
        style={{ textDecoration: "none" }}
      >
        <StyledLink>
          <span>00</span> Home
        </StyledLink>
      </Link>
      <Link
        to="/Space-tourism-multipage-website/destination"
        style={{ textDecoration: "none" }}
      >
        <StyledLink>
          <span>01</span> Destination
        </StyledLink>
      </Link>
      <Link
        to="/Space-tourism-multipage-website/crew"
        style={{ textDecoration: "none" }}
      >
        <StyledLink>
          <span>02</span> Crew
        </StyledLink>
      </Link>
      <Link
        to="/Space-tourism-multipage-website/technology"
        style={{ textDecoration: "none" }}
      >
        <StyledLink>
          <span>03</span> Technology
        </StyledLink>
      </Link>
    </StyledNav>
  );
};

export default Navigation;
