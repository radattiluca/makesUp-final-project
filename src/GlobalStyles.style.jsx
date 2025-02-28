// bg-navbar #2b5353

// color-text #edeced

// color-text-label #6d8654

// /* Schermi grandi o ad alta risoluzione */
// @media all and (max-width: 1690px) { ... }

// /* Schermi Desktop o Portatili */
// @media all and (min-width: 1280px) and (max-width: 1689px) { ... }

// /* Tablet in modalità orizzontale */
// @media all and (min-width: 737px) and (max-width: 1279px) { ... }

// /* Tablet in modalità verticale */
// @media all and (min-width: 481px) and (max-width: 736px) { ... }

// /* Smartphone o piccoli Tablet */
// @media all and (max-width: 480px) { ... }

import { createGlobalStyle } from "styled-components";

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
    }



`;
