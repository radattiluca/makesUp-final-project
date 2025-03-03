import { useState, useEffect } from "react";

//import store
import { useSelector, useDispatch } from "react-redux";

//import slices
import { fetchFootPrint } from "../../redux/slices/footPrintClientApi.slice";
import {
  setOrigin,
  setDestination,
  setClass,
  setAirplane,
} from "../../redux/slices/flightSelection.slice";

//import styles
import {
  StyledRowButton,
  StyledButtonForm,
  StyledContainerCo2,
  StyledContainerFootPrintImage,
  StyledContainerDoublePrintImage,
  StyledContainerTreedom,
  StyledContainerGoClimate,
  StyledFakeInput,
  StyledFakeLabel,
} from "./ContainerResults.style";

function ContainerResults({ className, children }) {
  const count = useSelector((state) => state.counterPassengers.value);
  const {
    selectedOrigin,
    selectedDestination,
    selectedClass,
    selectedAirplane,
  } = useSelector((state) => state.flightSelection);

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
      console.log("nell'useEffect: " + footprint);
    }
  }, [footprint]);

  console.log("Fuori dall'useEffect: " + footprint);
  console.log("🛑 Stato fuori useEffect:", JSON.stringify(footprint, null, 2));

  if (statusFootPrint === "loading") return <p>Caricamento...</p>; //da mettere lo stile
  if (statusFootPrint === "failed") return <p>{errorFootPrint}</p>;

  const co2PerPerson = Number((footprint / 1000) * count).toFixed(2) || "N/A";
  const value = selectedAirplane?.value;
  const loadFactory = Math.round(value * 0.8);
  const co2ForPassengers = `${co2PerPerson * Number(loadFactory)}`;
  const totalCo2 = Number(co2ForPassengers).toFixed(2);

  const urlCompensation = details_url || "N/A";
  const urlTreedom = "https://www.treedom.net/it";

  return (
    <div className={className}>
      {children}

      <StyledContainerCo2>
        <h1>La tua impronta</h1>
        <StyledFakeLabel>Il tuo volo</StyledFakeLabel>
        <StyledFakeInput>
          {co2PerPerson}t di Co2
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
          </a>
        </StyledButtonForm>
        <StyledContainerTreedom></StyledContainerTreedom>

        <StyledButtonForm>
          <a href={urlCompensation} target="_blank" rel="noopener noreferrer">
            <span>Compensa su GoClimate</span>
          </a>
        </StyledButtonForm>
        <StyledContainerGoClimate></StyledContainerGoClimate>
      </StyledRowButton>
    </div>
  );
}

export default ContainerResults;
