import { useState, useEffect } from "react";

//import store
import { useSelector, useDispatch } from "react-redux";

//import slices
import { fetchFootPrint } from "../../redux/slices/footPrintClientApi.slice";
import {
  setOrigin,
  setDestination,
  setClass,
} from "../../redux/slices/flightSelection.slice";

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
  StyledContainerGoClimate,
  StyledFakeForm,
  StyledFakeInput,
  StyledFakeLabel,
} from "./ContainerResults.style";

function ContainerResults({ className, children }) {
  const count = useSelector((state) => state.counterPassengers.value);
  const { selectedOrigin, selectedDestination, selectedClass } = useSelector(
    (state) => state.flightSelection
  );

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
      // goClimateApi();
    }
  }, [footprint]);

  console.log("Fuori dall'useEffect: " + footprint);
  console.log("🛑 Stato fuori useEffect:", JSON.stringify(footprint, null, 2));

  if (statusFootPrint === "loading") return <p>Caricamento...</p>; //da mettere lo stile
  if (statusFootPrint === "failed") return <p>Errore: {errorFootPrint}</p>;

  const co2PerPerson = footprint / 1000 || "N/A";
  const totalCo2 = `${co2PerPerson}` * 140 || "N/A";
  // const offsetAmounts = offset_prices.map(
  //   (price) => ` ${Number(price.amount / 100)}${price.currency}`
  // );
  // console.log(offsetAmounts);
  const urlCompensation = details_url || "N/A";
  const urlTreedom = "https://www.treedom.net/it";

  // console.log(`Costo impronta ${offset}, link: ${urlCompensation}`);

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
          <StyledFakeInput>{count}</StyledFakeInput>
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
