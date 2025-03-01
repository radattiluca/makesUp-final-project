import { useState } from "react";

//import styles
import { GlobalStyles } from "../../GlobalStyles.style";
import { StyledAppContainer } from "./App.style";
import { StyledNavbar } from "../navbar/Navbar.style.jsx";
import { StyledButtonToForm } from "../buttonToForm/ButtonToForm.style";
import { StyledContainerButtonToForm } from "../containerButtonToForm/Container.style";
import {
  StyledContainerForm,
  StyledForm,
} from "../containerForm/ContainerForm.style";

function App() {
  return (
    <>
      <StyledAppContainer>
        <GlobalStyles />
        <StyledNavbar />
        <StyledContainerButtonToForm>
          <StyledButtonToForm></StyledButtonToForm>
        </StyledContainerButtonToForm>
        <StyledContainerForm></StyledContainerForm>
      </StyledAppContainer>
    </>
  );
}

export default App;
