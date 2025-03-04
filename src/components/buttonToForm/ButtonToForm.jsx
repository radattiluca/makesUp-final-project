import { useState } from "react";

import { useDispatch } from "react-redux";

//import styles
import { StyledButtonToForm, Button } from "./ButtonToForm.style";

import { buttonClicked } from "../../redux/slices/isClicked.slice";

function ButtonToForm({ className, children }) {
  const dispatch = useDispatch();

  return (
    <div className={className}>
      <Button onClick={() => dispatch(buttonClicked())}>
        Calcola la tua impronta
      </Button>
    </div>
  );
}

export default ButtonToForm;
