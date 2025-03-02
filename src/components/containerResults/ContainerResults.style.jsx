import styled from "styled-components";
import Select from "react-select";

//import components
import ContainerResults from "./ContainerResults";

//import img
import bgForm from "../../assets/image/desktop-bg-image.jpg";
import bgformMobile from "../../assets/image/Calcola la tua impronta.png";
import imageFoot from "../../assets/image/imageFoot.png";
import imageFoots from "../../assets/image/imageFoots.png";
import treedom from "../../assets/image/Treedom.png";

export const StyledContainerResults = styled(ContainerResults)`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const StyledFakeForm = styled.div`
  background-color: #edeced;
  width: 80%;
  margin: auto;
  margin-top: 400px;
  margin-bottom: 20px;
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
export const StyledContainerCo2 = styled.div`
  width: 80%;
  background-color: #edeced;
  margin: auto;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
`;
export const StyledRowButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #edeced;
  padding: 10px;
  width: 80%;
  margin: auto;
  margin-bottom: 40px;
  border-radius: 12px;
  position: relative;
`;

export const StyledFakeInput = styled.div`
  width: 100%;
  height: 30px;
  background-color: rgb(43, 83, 83, 0.9);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 10px;
  color: #edeced;
`;

export const StyledFakeLabel = styled.div`
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
  color: #edeced;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
`;

export const StyledContainerFootPrintImage = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("${imageFoot}");
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;
`;

export const StyledContainerDoublePrintImage = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("${imageFoots}");
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;
`;

export const StyledContainerTreedom = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("${treedom}");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 55px;
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
