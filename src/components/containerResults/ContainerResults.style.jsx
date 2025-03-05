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
import goClimate from "../../assets/image/goClimate_logo.png";

export const StyledContainerResults = styled(ContainerResults)`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const StyledContainerCo2 = styled.div`
  width: 300px;
  background-color: rgb(237, 236, 237, 0.9);
  margin: auto;
  border-radius: 12px;
  padding: 20px;
  margin: 30px auto 20px auto;
  z-index: 1;

  & h1 {
    /* color: #b9aba3; */
    color: #98887f;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }

  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 1690px) {
    text-align: center;
    width: 800px;
  }

  /* Schermi Desktop o Portatili */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    text-align: center;
    width: 800px;
  }

  /* Tablet in modalità orizzontale */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    width: 400px;
  }

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
    width: 400px;
  }
`;
export const StyledRowButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(237, 236, 237, 0.9);
  padding: 10px;
  width: 300px;
  margin: auto;
  margin-bottom: 40px;
  border-radius: 12px;
  position: relative;

  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 1690px) {
    width: 800px;
    flex-direction: row;
  }

  /* Schermi Desktop o Portatili */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    width: 800px;
    flex-direction: row;
  }

  /* Tablet in modalità orizzontale */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    width: 400px;
  }

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
    width: 400px;
  }
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

  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 1690px) {
    margin: auto;
    width: 220px;
    justify-content: center;
  }

  /* Schermi Desktop o Portatili */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    margin: auto;
    width: 220px;
    justify-content: center;
  }

  /* Tablet in modalità orizzontale */
  @media all and (min-width: 737px) and (max-width: 1279px) {
  }

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
  }
`;

export const StyledFakeLabel = styled.div`
  margin: 10px auto 10px 5px;
  color: #6d8654;
  font-weight: 700;

  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 1690px) {
    margin: 10px auto 10px auto;
    width: 250px;
  }

  /* Schermi Desktop o Portatili */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    width: 250px;
    margin: 10px auto 10px auto;
  }

  /* Tablet in modalità orizzontale */
  @media all and (min-width: 737px) and (max-width: 1279px) {
  }

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
  }
`;

export const StyledButtonForm = styled.button`
  width: 180px;
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
  /* margin-bottom: 5px; */
  margin: 5px 0 5px 0;

  & a {
    text-decoration: none;
    color: #edeced;
  }

  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 1690px) {
    width: 215px;
    text-align: left;
    font-size: 14px;
    margin-right: 20px;
  }

  /* Schermi Desktop o Portatili */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    width: 215px;
    text-align: left;
    font-size: 14px;
    margin-right: 20px;
  }

  /* Tablet in modalità orizzontale */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    width: 208px;
    text-align: left;
    font-size: 14px;
  }

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
    width: 208px;
    text-align: left;
    font-size: 14px;
  }
`;

export const StyledContainerFootPrintImage = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("${imageFoot}");
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;

  /* Schermi grandi o ad alta risoluzione */
@media all and (min-width: 1690px) { 
  margin-left: 10px;
 }

/* Schermi Desktop o Portatili */
@media all and (min-width: 1280px) and (max-width: 1689px) { 
  margin-left: 10px;
 }

/* Tablet in modalità orizzontale */
@media all and (min-width: 737px) and (max-width: 1279px) { ... }

/* Tablet in modalità verticale */
@media all and (min-width: 481px) and (max-width: 736px) { ... }
`;

export const StyledContainerDoublePrintImage = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("${imageFoots}");
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;

  /* Schermi grandi o ad alta risoluzione */
@media all and (min-width: 1690px) { 
  margin-left: 10px;
 }

/* Schermi Desktop o Portatili */
@media all and (min-width: 1280px) and (max-width: 1689px) { 
  margin-left: 10px;
 }

/* Tablet in modalità orizzontale */
@media all and (min-width: 737px) and (max-width: 1279px) { ... }

/* Tablet in modalità verticale */
@media all and (min-width: 481px) and (max-width: 736px) { ... }
`;

export const StyledContainerTreedom = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("${treedom}");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 70px;
  top: 18px;

  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 1690px) {
    left: 350px;
    top: 18px;
  }

  /* Schermi Desktop o Portatili */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    left: 350px;
    top: 18px;
  }

  /* Tablet in modalità orizzontale */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    right: 105px;
    top: 18px;
  }

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
    right: 105px;
    top: 18px;
  }
`;

export const StyledContainerGoClimate = styled.div`
  width: 15px;
  height: 15px;
  background-image: url("${goClimate}");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 70px;
  bottom: 21px;

  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 1690px) {
    right: 200px;
    bottom: 22px;
  }

  /* Schermi Desktop o Portatili */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    right: 200px;
    bottom: 22px;
  }

  /* Tablet in modalità orizzontale */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    right: 105px;
    bottom: 22px;
  }

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
    right: 105px;
    bottom: 22px;
  }
`;
