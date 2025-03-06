//import styles
import {
  StyledContainerInfo,
  StyledParagraphInfo,
  StyledContainerArrow,
  ContainerTitle,
} from "./InfoHome.style";

//import images
import arrow from "../../assets/image/arrow.png";

function InfoHome({ className, children }) {
  return (
    <div className={className}>
      {children}
      <ContainerTitle>
        <h1>Compensa le emissioni del tuo viaggio aereo!</h1>
      </ContainerTitle>

      <StyledContainerInfo>
        <StyledParagraphInfo>
          Nessuno di noi, da solo, può fermare il surriscaldamento globale,
          questo è un dato di fatto. Tuttavia,
          <span> ognuno di noi può contribuire</span>, nel suo piccolo, a
          contrastarlo.
        </StyledParagraphInfo>
        <StyledParagraphInfo>
          Ad esempio, <span>salvando quell'albero di noci </span>davanti casa,
          piantato dal nonno, che sperava che un giorno qualcuno ne potesse
          beneficiare della sua ombra e dei suoi frutti.
        </StyledParagraphInfo>
        <StyledParagraphInfo>
          Proprio questo significa agire nel proprio piccolo. Chi pianta un
          albero non lo fa per beneficiarne immediatamente, ma è
          <span> una forma di altruismo</span> verso le generazioni future, ed è
          proprio questo il punto cruciale quando si parla di fare qualcosa per
          il cambiamento climatico.
        </StyledParagraphInfo>
        <h3>Il tuo piccolo gesto è qui!</h3>
      </StyledContainerInfo>
      <StyledContainerArrow>
        <img src={arrow} alt="arrow logo" />
      </StyledContainerArrow>
    </div>
  );
}

export default InfoHome;
