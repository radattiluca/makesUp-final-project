import styled from "styled-components";

import InfoHome from "./InfoHome";

export const StyledInfoHome = styled(InfoHome)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledContainerInfo = styled.div`
  width: 300px;
  background-color: rgb(237, 236, 237, 0.9);
  border-radius: 12px;
  margin: auto;
  margin-top: 10px;
  z-index: 3;
  height: 350px;
  overflow: scroll;
  padding: 20px;

  & h3 {
    color: #98887f; // #b9aba3 25% darker
    text-align: center;
    margin-bottom: 30px;
  }

  & span {
    color: #ed955f;
  }

  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 2000px) {
    width: 1200px;
    height: 100%;
    overflow: visible;

    & h3 {
      font-size: 1.8em;
    }
  }

  /* Schermi Desktop o Portatili */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    width: 900px;
    height: 100%;
    overflow: visible;
  }

  /* Tablet in modalità orizzontale */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    width: 500px;
    height: 100%;
    overflow: visible;
  }

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
    width: 400px;
    height: 100%;
    overflow: visible;
  }
`;

export const StyledParagraphInfo = styled.p`
  width: 100%;
  padding: 20px 20px 0 20px;
  line-height: 1.5;
  color: #263f3f;
  font-size: 1em;
  padding-bottom: 20px;
  text-align: center;

  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 2000px) {
    font-size: 2em;
  }

  /* Schermi Desktop o Portatili */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    font-size: 1.3em;
  }

  /* Tablet in modalità orizzontale */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    font-size: 1.2em;
  }

  /* Tablet in modalità verticale */
  @media all and (min-width: 481px) and (max-width: 736px) {
    font-size: 1.2em;
  }
`;

export const StyledContainerArrow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & img {
    width: 60px;
    margin-top: 10px;
    position: relative;
    animation-name: ArrowUpDown;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    /* Schermi grandi o ad alta risoluzione */
    @media all and (min-width: 2000px) {
      width: 150px;
    }
  }

  @keyframes ArrowUpDown {
    0% {
      top: 0px;
    }
    25% {
      top: 0px;
    }
    50% {
      top: 28px;
    }
    75% {
      top: 28px;
    }
    100% {
      top: 0px;
    }
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 30px;
  background-color: rgb(237, 149, 95, 0.8);

  & h1 {
    font-size: 1em;
    text-align: center;
    color: #edeced;
  }

  /* Schermi grandi o ad alta risoluzione */
  @media all and (min-width: 2000px) {
    margin-bottom: 80px;
    & h1 {
      font-size: 1.8em;
    }
  }
`;
