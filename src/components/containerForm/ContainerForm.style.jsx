import styled from "styled-components";
import Select from "react-select";
//import components
import ContainerForm from "./ContainerForm";

//import img
import bgForm from "../../assets/image/bg-image-form.png";

import { StyledButtonToForm } from "../buttonToForm/ButtonToForm.style";

export const StyledContainerForm = styled(ContainerForm)`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  background-color: #edeced;
  width: 80%;
  margin: auto;
  margin-top: 400px;
  margin-bottom: 50px;
  padding: 20px;
  border-radius: 12px;
  background-image: url("${bgForm}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: left;
  background-position-y: -40px;
`;

export const StyledRowOne = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledRowTwo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const StyledRowButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledInput = styled(Select)`
  width: 100%;
  margin: 10px 0 10px 0;
  color: #2b5353;
`;

export const StyledLabel = styled.label`
  margin-right: auto;
  color: #6d8654;
  font-weight: 700;
`;

export const StyledButtonForm = styled(StyledButtonToForm)`
  width: 100%;
`;
