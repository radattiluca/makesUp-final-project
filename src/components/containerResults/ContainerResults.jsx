import { useEffect } from "react";

//import store
import { useSelector, useDispatch } from "react-redux";

//import slices
import { fetchFootPrint } from "../../redux/slices/footPrintClientApi.slice";

//import styles
import {
  StyledRowButton,
  StyledButtonForm,
  StyledContainerCo2,
  StyledContainerFootPrintImage,
  StyledContainerDoublePrintImage,
  StyledFakeInput,
  StyledFakeLabel,
} from "./ContainerResults.style";
import { StyledParagraphLoading } from "../loading/Loading.style";

//import images
import airplane from "../../assets/image/airplane.png";
import treedom from "../../assets/image/Treedom.png";
import goClimate from "../../assets/image/goClimate_logo.png";

function ContainerResults({ className, children }) {
  const count = useSelector((state) => state.counterPassengers.value);
  const { selectedAirplane } = useSelector((state) => state.flightSelection);

  const dispatchFootPrint = useDispatch();
  const {
    footprint,
    offset_prices,
    details_url,
    statusFootPrint,
    errorFootPrint,
  } = useSelector((state) => state.footprint);

  useEffect(() => {
    if (statusFootPrint === "idle") {
      dispatchFootPrint(fetchFootPrint());
    }
  }, [footprint]);

  const co2ForPerson = Number((footprint / 1000) * count).toFixed(2) || "N/A";
  const value = selectedAirplane?.value;
  const loadFactory = Math.round(value * 0.8);
  const co2ForPassengers = `${co2ForPerson * Number(loadFactory)}`;
  const totalCo2 = Number(co2ForPassengers).toFixed(2);
  const price = Number((offset_prices / 100) * count);
  const urlCompensation = details_url || "N/A";
  const urlTreedom = "https://www.treedom.net/it/plant-a-tree";

  return (
    <div className={className}>
      {children}
      {footprint && offset_prices && details_url ? (
        <>
          <StyledContainerCo2>
            <h1>La tua impronta</h1>
            <StyledFakeLabel>Il tuo volo</StyledFakeLabel>
            <StyledFakeInput>
              {co2ForPerson}t di Co2 = <span>{price}€</span>
              <StyledContainerFootPrintImage></StyledContainerFootPrintImage>
            </StyledFakeInput>
            <StyledFakeLabel>L'intero volo</StyledFakeLabel>
            <StyledFakeInput>
              {totalCo2}t di Co2
              <StyledContainerDoublePrintImage></StyledContainerDoublePrintImage>
            </StyledFakeInput>
          </StyledContainerCo2>

          <StyledRowButton>
            <StyledButtonForm>
              <a href={urlTreedom} target="_blank" rel="noopener noreferrer">
                <span>Compensa su Treedom</span>
                <img src={treedom} alt="Logo Treedom" />
              </a>
            </StyledButtonForm>

            <StyledButtonForm>
              <a
                href={urlCompensation}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Compensa su GoClimate</span>
                <img src={goClimate} alt="Logo goClimate" />
              </a>
            </StyledButtonForm>
          </StyledRowButton>
        </>
      ) : (
        <StyledParagraphLoading>
          <img src={airplane} alt="airplane" />
        </StyledParagraphLoading>
      )}
    </div>
  );
}

export default ContainerResults;
