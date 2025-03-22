import { useState, useEffect } from "react";

//import styles
import { GlobalStyles } from "../../GlobalStyles.style";
import { StyledAppContainer, StyledContainerHome } from "./App.style";
import { StyledNavbar } from "../navbar/Navbar.style.jsx";
import { StyledButtonToForm } from "../buttonToForm/ButtonToForm.style";
import { StyledContainerButtonToForm } from "../containerButtonToForm/Container.style";
import { StyledContainerForm } from "../containerForm/ContainerForm.style";
import { StyledContainerFormDesktop } from "../containerForm/ContainerFormDesktop.style";
import { StyledContainerResults } from "../containerResults/ContainerResults.style.jsx";
import { StyledInfoHome } from "../infoHome/InfoHome.style.jsx";

import { useSelector } from "react-redux";

function App() {
  const isClicked = useSelector((state) => state.isClicked.value);

  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width: 1279px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1279px)")
      .addEventListener("change", (e) => setIsDesktop(e.matches));
  }, []);

  return (
    <>
      <StyledAppContainer>
        <GlobalStyles />
        <StyledNavbar />

        {isClicked && (
          <>
            {isDesktop ? (
              <StyledContainerFormDesktop />
            ) : (
              <StyledContainerForm />
            )}

            <StyledContainerResults />
          </>
        )}
        {!isClicked && (
          <StyledContainerHome>
            <StyledInfoHome></StyledInfoHome>
            <StyledContainerButtonToForm>
              <StyledButtonToForm></StyledButtonToForm>
            </StyledContainerButtonToForm>
          </StyledContainerHome>
        )}
      </StyledAppContainer>
    </>
  );
}

export default App;
