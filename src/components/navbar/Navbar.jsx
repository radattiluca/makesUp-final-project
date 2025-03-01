import { useState } from "react";

//import styles
import {
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  CenterContainer,
} from "./Navbar.style";

//import Logo
import logo from "../../assets/image/MakesUp-Logo.png";

function Navbar({ className, children }) {
  return (
    <div className={className}>
      <NavbarInnerContainer>
        <LeftContainer></LeftContainer>
        <CenterContainer>
          <img src={logo} alt="logo" />
        </CenterContainer>
        <RightContainer></RightContainer>
      </NavbarInnerContainer>
    </div>
  );
}

export default Navbar;
