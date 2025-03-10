import styled from "styled-components";

//import components
import Navbar from "./Navbar.jsx";

export const StyledNavbar = styled(Navbar)`
  width: 100%;
  background-color: rgb(43, 83, 83, 0.8);
  display: flex;
  flex-direction: column;
  /* position: sticky;
  top: 0;
  z-index: 300; */
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 20px 0 10px 0;
`;

export const LeftContainer = styled.div``;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & img {
    width: 160px;

    /* Large or high-resolution screens */
    @media all and (min-width: 1690px) {
      width: 200px;
    }

    /* Desktop or Laptop screens */
    @media all and (min-width: 1280px) and (max-width: 1689px) {
      width: 190px;
    }

    /* Tablet in vertical mode and landscape mode */
    @media all and (min-width: 481px) and (max-width: 1279px) {
      width: 160px;
    }
  }
`;
export const RightContainer = styled.div``;
