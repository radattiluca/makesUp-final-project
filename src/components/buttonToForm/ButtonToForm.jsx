import { useState } from "react";

//import styles
import { StyledButtonToForm, Button } from "./ButtonToForm.style";

function ButtonToForm({ className, children }) {
  return (
    <div className={className}>
      <Button>Calcola la tua impronta</Button>
    </div>
  );
}

export default ButtonToForm;
