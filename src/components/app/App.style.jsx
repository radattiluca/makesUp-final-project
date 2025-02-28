import styled from "styled-components";

//import bg-image
import desktopImage from "../../assets/image/desktop-bg-image.jpg";
import mobileImage from "../../assets/image/mobile-bg-image.jpg";

export const StyledAppContainer = styled.div`
  background-image: url("${desktopImage}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
    background-image: url("${mobileImage}");
  }

  /* Smartphone o piccoli Tablet */
  @media all and (max-width: 480px) {
    background-image: url("${mobileImage}");
  }
`;
