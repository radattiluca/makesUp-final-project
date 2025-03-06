// bg-navbar #2b5353

//color-foot #b9aba3

// color-text #edeced

// color-text-label #6d8654

// color-price #ed955f;

import { createGlobalStyle } from "styled-components";

//import bg-image
import desktopImage from "./assets/image/desktop-bg-image.jpg";
import mobileImage from "./assets/image/mobile-bg-image.jpg";

export const GlobalStyles = createGlobalStyle`
   *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

   
   html{
        background-color: #e2ddd0; 
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Open Sans, sans-serif;
        background-color: transparent;

    }

    body{
         background-image: url("${desktopImage}");
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          height: 100vh;


  /* Tablet in vertical mode and Tablet in landscape mode */
  @media all and (min-width: 480px) and (max-width: 736px) {
    background-image: url("${mobileImage}");
  }
    }



`;
