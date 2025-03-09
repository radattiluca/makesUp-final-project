import styled from "styled-components";
import Select from "react-select";
//import components
import ContainerForm from "./ContainerForm";

//import img
import bgformMobile from "../../assets/image/bg-image-form-mobile.png";
import imageFoot from "../../assets/image/imageFoot.png";
import imageFoots from "../../assets/image/imageFoots.png";

import { StyledButtonToForm } from "../buttonToForm/ButtonToForm.style";

export const StyledContainerForm = styled(ContainerForm)`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  background-color: rgb(237, 236, 237, 0.9);
  width: 300px;
  margin: auto;
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  position: relative;

  /* Tablet in vertical mode and in landscape mode */
  @media all and (min-width: 481px) and (max-width: 1279px) {
    width: 400px;
  }
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
  width: 300px;

  /* Tablet in vertical mode and in landscape mode */
  @media all and (min-width: 481px) and (max-width: 1279px) {
    width: 400px;
  }
`;

export const StyledLabel = styled.label`
  margin: 10px auto 10px 5px;
  color: #6d8654;
  font-weight: 700;
`;

export const StyledButtonForm = styled.button`
  width: 180px;
  background-color: #2b5353;
  border: none;
  border-radius: 20px;
  padding: 5px 10px 5px 10px;
  margin-top: 30px;
  color: #edeced;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 12px;
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
  bottom: 24px;
  right: 68px;
  z-index: 2;

  /* Tablet in vertical mode and in landscape mode */
  @media all and (min-width: 481px) and (max-width: 1279px) {
    right: 120px;
  }
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
  z-index: 0;
`;

export const StyledContainaerCounter = styled.div`
  width: 40%;
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
