import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../../assets/shared/icon-close.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import { StyledNav, StyledLink, Container } from "./MobileNavigation.styles";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <img
        src={hamburger}
        alt="menu hamburger"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <StyledNav>
          <img src={close} alt="close" onClick={() => setOpen(!open)} />
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
      )}
    </Container>
  );
};

export default MobileNavigation;
