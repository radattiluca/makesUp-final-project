import styled from "styled-components";
import Select from "react-select";
//import components
import ContainerFormDesktop from "./ContainerFormDesktop";

//import img
import bgForm from "../../assets/image/bg-image-form.png";
import imageFoot from "../../assets/image/imageFoot.png";
import imageFoots from "../../assets/image/imageFoots.png";

import { StyledButtonToForm } from "../buttonToForm/ButtonToForm.style";

export const StyledContainerFormDesktop = styled(ContainerFormDesktop)`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  background-color: rgb(237, 236, 237, 0.9);
  width: 800px;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
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
  align-items: start;
  margin-bottom: auto;
`;

export const StyledRowButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  grid-column: 1/3;
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
  width: 230px;
  background-color: #2b5353;
  border: none;
  border-radius: 20px;
  padding: 5px 10px 5px 10px;
  margin-top: 30px;
  color: #edeced;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  z-index: 2;
`;

export const StyledContainerFootPrintImage = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-image: url("${imageFoot}");
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 26px;
  right: 300px;
  z-index: 2;
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
  background-image: url("${bgForm}");
  background-repeat: no-repeat;
  background-size: contain;
  top: -25px;
  left: 150px;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const StyledContainaerCounter = styled.div`
  width: 30%;
  height: 28px;
  background-color: rgb(43, 83, 83, 0.9);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  color: rgb(237, 236, 237);
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  flex-wrap: nowrap;
  padding: 0 5px 0 5px;

  & span {
    padding: 0 15px 0 15px;
    border-right: 1px solid rgb(237, 236, 237, 0.7);
    border-left: 1px solid rgb(237, 236, 237, 0.7);
  }
`;
export const StyledButtonCounter = styled.div`
  background-color: transparent;
  border: none;
  border-radius: 20px;
  padding: 5px 0 5px 10px;
  color: #edeced;
  font-family: Open Sans, sans-serif;
  font-weight: 800;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  padding: 4px;
`;

export const StyledLabelPassengers = styled.div`
  width: 100%;
  margin: 10px auto 10px 5px;

  & p {
    color: #6d8654;
    font-weight: 700;
  }
`;
