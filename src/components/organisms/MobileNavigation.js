import React, { useState } from "react";
import { Container } from "./MobileNavigation.styles";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import Links from "../molecules/Links";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <img src={hamburger} alt="menu hamburger" onClick={() => setOpen(!open)} />
  );

  const closeIcon = (
    <img src={close} alt="close" onClick={() => setOpen(!open)} />
  );
  return (
    <Container>
      {open ? closeIcon : hamburgerIcon}
      {open && <Links />}
    </Container>
  );
};

export default MobileNavigation;
