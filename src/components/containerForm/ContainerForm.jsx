import { useState } from "react";
import Select from "react-select";

//import styles
import {
  StyledContainerForm,
  StyledForm,
  StyledInput,
  StyledRowOne,
  StyledRowTwo,
  StyledLabel,
  StyledRowButton,
  StyledButtonForm,
} from "./ContainerForm.style";
import { StyledButtonToForm } from "../buttonToForm/ButtonToForm.style";

//esempio di valori
const partenze = [{ value: "Milano", label: "Milano" }];
const passeggeri = [{ value: 2, label: "2" }];
const destinazione = [{ value: "Paris", label: "Paris" }];
const aereo = [{ value: "Airbus A220", label: "Airbus A220" }];
const classe = [{ value: "Economy", label: "Economy" }];

//questo ci serve per lo stile di react-select
const customStylesInput = {
  control: (provider) => ({
    ...provider,
    backgroundColor: "rgb(43, 83, 83, 0.8)",
    borderRadius: "20px",
  }),
  options: (provider) => ({
    ...provider,
    color: "#edeced",
    backgroundColor: "#edeced",
  }),
};

function ContainerForm({ className, children }) {
  return (
    <div className={className}>
      {children}
      <StyledForm>
        <StyledRowOne>
          <StyledLabel htmlFor="partenze">Partenza</StyledLabel>
          <StyledInput
            options={partenze}
            id="partenze"
            styles={customStylesInput}
          />
          <StyledLabel htmlFor="destinazione">Destinazione</StyledLabel>
          <StyledInput
            options={destinazione}
            id="destinazione"
            styles={customStylesInput}
          />
          <StyledLabel htmlFor="passeggeri">Passeggeri</StyledLabel>
          <StyledInput
            options={passeggeri}
            id="passeggeri"
            styles={customStylesInput}
          />
        </StyledRowOne>
        <StyledRowTwo>
          <StyledLabel htmlFor="aereo">Aereo</StyledLabel>
          <StyledInput options={aereo} id="aereo" styles={customStylesInput} />
          <StyledLabel htmlFor="classe">Classe</StyledLabel>
          <StyledInput
            options={classe}
            id="classe"
            styles={customStylesInput}
          />
        </StyledRowTwo>
        <StyledRowButton>
          <StyledButtonForm>Calcola la tua impronta</StyledButtonForm>
        </StyledRowButton>
      </StyledForm>
    </div>
  );
}

export default ContainerForm;
