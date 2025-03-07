//import styles
import { StyledParagraphLoading } from "./Loading.style";

import airplaneImage from "../../assets/image/airplane.png";

function ContainerLoading({ className, children }) {
  return (
    <div className={className}>
      {children}
      <StyledParagraphLoading>
        <img src={airplaneImage} alt="airplaneImage" />
      </StyledParagraphLoading>
    </div>
  );
}

export default ContainerLoading;
