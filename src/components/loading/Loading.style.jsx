import styled from "styled-components";

import ContainerLoading from "./Loading";

export const StyledLoading = styled(ContainerLoading)``;

export const StyledParagraphLoading = styled.p`
  margin-top: 30px;
  text-align: left;
  width: 90%;

  img {
    width: 50px;
    position: relative;
    animation: slideAnimation 8s ease-in-out infinite;
  }

  @keyframes slideAnimation {
    0% {
      transform: translateX(0vh);
      opacity: 0;
    }
    25% {
      transform: translateX(50vw);
      opacity: 1;
    }
    50% {
      transform: translateX(50vw);
      opacity: 1;
    }
    75% {
      transform: translateX(90vw);
      opacity: 0;
    }
    100% {
      transform: translateX(90vw);
      opacity: 0;
    }
  }
`;
