import { useState } from "react";

//import styles
import { StyledContainerButtonToForm } from "./Container.style";

function ContainerButtonToForm({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default ContainerButtonToForm;
