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
  width: 220px;

  /* Desktop or Laptop screens and  Large or high-resolution screens */
  @media all and (min-width: 1280px) {
    width: 300px;

    &:hover {
      animation: myAnim2 2s ease 0s 1 normal forwards;
      @keyframes myAnim2 {
        0%,
        100% {
          transform: translateX(0);
        }

        10%,
        30%,
        50%,
        70% {
          transform: translateX(-10px);
        }

        20%,
        40%,
        60% {
          transform: translateX(10px);
        }

        80% {
          transform: translateX(8px);
        }

        90% {
          transform: translateX(-8px);
        }
      }
    }
  }

  /* Tablet in landscape mode */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    width: 280px;
  }

  /* Tablet in vertical mode */
  @media all and (min-width: 481px) and (max-width: 736px) {
    width: 250px;
  }
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

  /* Large or high-resolution screens */
  @media all and (min-width: 1690px) {
    font-size: 23px;

    &:hover {
      animation: myAnimFont 4s infinite linear;
      animation-delay: 300ms;

      @keyframes myAnimFont {
        from {
          color: #b9aba3;
        }
        to {
          color: #ed955f;
        }
      }
    }
  }

  /* Desktop or Laptop screens */
  @media all and (min-width: 1280px) and (max-width: 1689px) {
    font-size: 21px;
  }

  /* Tablet in landscape mode */
  @media all and (min-width: 737px) and (max-width: 1279px) {
    font-size: 20px;
  }

  /* Tablet in vertical mode */
  @media all and (min-width: 481px) and (max-width: 736px) {
    font-size: 18px;
  }
`;
