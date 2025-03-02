import styled from "styled-components";
import Select from "react-select";
//import components
import ContainerForm from "./ContainerForm";

//import img
import bgForm from "../../assets/image/bg-image-form.png";
import bgformMobile from "../../assets/image/Calcola la tua impronta.png";
import imageFoot from "../../assets/image/imageFoot.png";
import imageFoots from "../../assets/image/imageFoots.png";

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
  position: relative;
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
`;

export const StyledLabel = styled.label`
  margin: 10px auto 10px 5px;
  color: #6d8654;
  font-weight: 700;
`;

export const StyledButtonForm = styled.button`
  width: 80%;
  background-color: #2b5353;
  border: none;
  border-radius: 20px;
  padding: 5px 0 5px 10px;
  margin-top: 30px;
  color: #edeced;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
`;

export const StyledContainerFootPrintImage = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-image: url("${imageFoot}");
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 24px;
  right: 50px;
`;

export const StyledContainerDoublePrintImage = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-image: url("${imageFoots}");
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 24px;
  right: 50px;
`;

export const StyledContainerImageBg = styled.div`
  position: absolute;
  background-image: url("${bgformMobile}");
  background-repeat: no-repeat;
  background-size: contain;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
`;
