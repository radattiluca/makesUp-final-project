import styled from "styled-components";

import InfoHome from "./InfoHome";

export const StyledInfoHome = styled(InfoHome)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledContainerInfo = styled.div`
  width: 90%;
  /* background-color: rgb(237, 236, 237, 0.9); */
  border-radius: 5px;
  margin: auto;
  margin-top: 10px;
  z-index: 3;
  /* height: 60vh;
  overflow: scroll; */

  & h3 {
    color: #796d66;
    text-align: center;
    margin-bottom: 30px;
  }

  & span {
    color: #ed955f;
    font-weight: bold;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    width: 50%;
    height: 100%;
    overflow: visible;

    & h3 {
      font-size: 1.4em;
    }
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    width: 90%;
    height: 100%;
    overflow: visible;
  }

  /* Tablet in landscape mode */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    width: 90%;
    height: 100%;
    overflow: visible;
  }

  /* Tablet in vertical mode */
  @media all and (min-width: 481px) and (max-width: 736px) {
    width: 90%;
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
  font-weight: 600;
  padding-bottom: 20px;
  text-align: center;

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    font-size: 1.5em;
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    font-size: 1.3em;
  }

  /* Tablet in vertical mode and Tablet in landscape mode */
  @media all and (min-width: 481px) and (max-width: 1279px) {
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
  }

  @keyframes ArrowUpDown {
    0% {
      top: -20px;
    }
    25% {
      top: -20px;
    }
    50% {
      top: 0px;
    }
    75% {
      top: 0px;
    }
    100% {
      top: -20px;
    }
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  margin: auto;
  /* margin-bottom: 30px; */
  background-color: rgb(237, 149, 95, 0.8);

  & h1 {
    font-size: 0.8em;
    text-align: center;
    color: #edeced;

    /* For anything */
    @media all and (min-width: 481px) and (max-width: 1690px) {
      font-size: 1em;
    }
  }
`;
