import styled from "styled-components";

//import components
import Navbar from "./Navbar.jsx";

export const StyledNavbar = styled(Navbar)`
  width: 100%;
  background-color: #2b5353;
  display: flex;
  flex-direction: column;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div``;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & img {
    padding: 10px;
  }
`;
export const RightContainer = styled.div``;
