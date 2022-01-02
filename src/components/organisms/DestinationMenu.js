import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, StyledLink } from "./DestinationMenu.styles";

const DestinationMenu = () => {
  return (
    <Wrapper>
      <Link to="/destination" style={{ textDecoration: "none" }}>
        <StyledLink>Moon</StyledLink>
      </Link>
      <Link to="/destination/mars" style={{ textDecoration: "none" }}>
        <StyledLink>Mars</StyledLink>
      </Link>
      <Link to="/destination/europa" style={{ textDecoration: "none" }}>
        <StyledLink>Europa</StyledLink>
      </Link>
      <Link to="/destination/titan" style={{ textDecoration: "none" }}>
        <StyledLink>Titan</StyledLink>
      </Link>
    </Wrapper>
  );
};

export default DestinationMenu;
