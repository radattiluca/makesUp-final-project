//import styles
import {
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  CenterContainer,
} from "./Navbar.style";

//import Logo
import logoNavbar from "../../assets/image/MakesUp-Logo-Navbar.png";

function Navbar({ className, children }) {
  return (
    <div className={className}>
      <NavbarInnerContainer>
        <LeftContainer></LeftContainer>
        <CenterContainer>
          <img src={logoNavbar} alt="logoNavbar" />
        </CenterContainer>
        <RightContainer></RightContainer>
      </NavbarInnerContainer>
    </div>
  );
}

export default Navbar;
