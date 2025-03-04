import styled from "styled-components";

//import components
import Navbar from "./Navbar.jsx";

export const StyledNavbar = styled(Navbar)`
  width: 100%;
  /* background-color: #2b5353; */
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 0;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled.div``;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & img {
    width: 100px;
    height: 100px;
    margin: 5px 0 0 0;

    /* Schermi grandi o ad alta risoluzione */
    @media all and (min-width: 1690px) {
      width: 110px;
      height: 110px;
      margin: 10px 0 0 0;
    }

    /* Schermi Desktop o Portatili */
    @media all and (min-width: 1280px) and (max-width: 1689px) {
      width: 110px;
      height: 110px;
    }

    /* Tablet in modalità orizzontale */
    @media all and (min-width: 737px) and (max-width: 1279px) {
      width: 110px;
      height: 110px;
    }

    /* Tablet in modalità verticale */
    @media all and (min-width: 481px) and (max-width: 736px) {
      width: 100px;
      height: 100px;
    }
  }
`;
export const RightContainer = styled.div``;
