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
`;
