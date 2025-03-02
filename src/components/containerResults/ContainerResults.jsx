import { useState } from "react";

//import styles
import {
  StyledRowOne,
  StyledRowTwo,
  StyledRowButton,
  StyledButtonForm,
  StyledContainerCo2,
  StyledContainerImageBg,
  StyledContainerFootPrintImage,
  StyledContainerDoublePrintImage,
  StyledContainerTreedom,
  StyledFakeForm,
  StyledFakeInput,
  StyledFakeLabel,
} from "./ContainerResults.style";

function ContainerResults({ className, children }) {
  return (
    <div className={className}>
      {children}
      <StyledFakeForm>
        <StyledContainerImageBg></StyledContainerImageBg>
        <StyledRowOne>
          <StyledFakeLabel>Partenza</StyledFakeLabel>
          <StyledFakeInput>input form partenza</StyledFakeInput>
          <StyledFakeLabel>Destinazione</StyledFakeLabel>
          <StyledFakeInput>input form destinazione</StyledFakeInput>
          <StyledFakeLabel>Passeggeri</StyledFakeLabel>
          <StyledFakeInput>passeggeri</StyledFakeInput>
        </StyledRowOne>
        <StyledRowTwo>
          <StyledFakeLabel>Aereo</StyledFakeLabel>
          <StyledFakeInput>aereo</StyledFakeInput>
          <StyledFakeLabel>Classe</StyledFakeLabel>
          <StyledFakeInput>classe</StyledFakeInput>
        </StyledRowTwo>
      </StyledFakeForm>
      <StyledContainerCo2>
        <h1>La tua impronta</h1>
        <StyledFakeLabel>Il tuo volo</StyledFakeLabel>
        <StyledFakeInput>
          0.100t di Co2
          <StyledContainerFootPrintImage></StyledContainerFootPrintImage>
        </StyledFakeInput>
        <StyledFakeLabel>L'intero volo</StyledFakeLabel>
        <StyledFakeInput>
          10.4t di Co2
          <StyledContainerDoublePrintImage></StyledContainerDoublePrintImage>
        </StyledFakeInput>
      </StyledContainerCo2>

      <StyledRowButton>
        <StyledButtonForm>
          <span>Compensa su Treedom</span>
        </StyledButtonForm>
        <StyledContainerTreedom></StyledContainerTreedom>
      </StyledRowButton>
    </div>
  );
}

export default ContainerResults;
