import styled from "styled-components";

//import components
import ButtonToForm from "./ButtonToForm";

export const StyledButtonToForm = styled(ButtonToForm)`
  background-color: #2b5353;
  color: #edeced;
  border-radius: 25px;
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;

  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 2000px) {
    width: 430px;
  }

  /* Schermi Desktop o Portatili */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    width: 300px;
  }

  /* Tablet in modalità orizzontale */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    width: 280px;
  }

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: #edeced;
  font-family: Open Sans, sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 2000px) {
    font-size: 30px;
  }

  /* Schermi Desktop o Portatili */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    font-size: 21px;
  }

  /* Tablet in modalità orizzontale */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    font-size: 20px;
  }

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
    font-size: 18px;
  }
`;
