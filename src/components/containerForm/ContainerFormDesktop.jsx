import { useEffect } from "react";
import Select from "react-select";

//import redux
import { useSelector, useDispatch } from "react-redux";

//import slices
import {
  increment,
  decrement,
} from "../../redux/slices/couterPassengers.slice";
import { fetchAirplanes } from "../../redux/slices/airplanes.slice";
import { fetchAirports } from "../../redux/slices/airports.slice";
import { fetchFootPrint } from "../../redux/slices/footPrintClientApi.slice";
import {
  setOrigin,
  setDestination,
  setClass,
  setAirplane,
} from "../../redux/slices/flightSelection.slice";

//import styles
import {
  StyledContainerFormDesktop,
  StyledForm,
  StyledInput,
  StyledRowOne,
  StyledRowTwo,
  StyledLabel,
  StyledRowButton,
  StyledButtonForm,
  StyledContainerImageBg,
  StyledContainerFootPrintImage,
  StyledContainerDoublePrintImage,
  StyledContainaerCounter,
  StyledButtonCounter,
  StyledLabelPassengers,
} from "./ContainerFormDesktop.style";
// import { StyledButtonToForm } from "../buttonToForm/ButtonToForm.style";

// import goClimateApi from "../clientApi/ClientApi";

const classe = [
  { value: "economy", label: "Economy" },
  { value: "premium_economy", label: "Premium economy" },
  { value: "business", label: "Business" },
  { value: "first", label: "First" },
];

//questo ci serve per lo stile di react-select
const customStylesInput = {
  control: (provider) => ({
    ...provider,
    backgroundColor: "rgb(43, 83, 83, 0.9)",
    borderRadius: "20px",
  }),

  menu: (provider) => ({
    ...provider,
    backgroundColor: "#edeced",
    fontSize: "10px",
    width: "100%",
    borderRadius: "10px",
    zIndex: "3",
  }),
  menuList: (provider) => ({
    ...provider,
    height: "100px",
    borderRadius: "10px",
  }),
  option: (provider, state) => ({
    ...provider,
    fontWeight: state.isSelected ? "800" : "500",
    color: "#edeced",
    backgroundColor: "rgb(43, 83, 83, 0.7)",
    borderBottom: "1px solid #edeced",
  }),

  singleValue: (provider) => ({
    ...provider,
    color: "#edeced",
  }),
};

function ContainerForm({ className, children }) {
  // andiamo a prendere gli stati con useSelector e utilizziamo dispatch per fare le azioni
  const count = useSelector((state) => state.counterPassengers.value);
  const dispatch = useDispatch();

  const dispatchAirplanes = useDispatch();
  const { list, status, error } = useSelector((state) => state.airplanes);

  const dispatchAirports = useDispatch();
  const { listAirports, statusAirports, errorAirports } = useSelector(
    (state) => state.airports
  );

  const dispatchFootPrint = useDispatch();
  const {
    selectedOrigin,
    selectedDestination,
    selectedClass,
    selectedAirplane,
  } = useSelector((state) => state.flightSelection);

  useEffect(() => {
    if (status === "idle") {
      dispatchAirplanes(fetchAirplanes());
      dispatchAirports(fetchAirports());
    }
  }, [status, statusAirports, dispatchAirplanes, dispatchAirports]);

  if (status === "loading" || statusAirports === "loading")
    return <p>Caricamento...</p>; //da mettere lo stile
  if (status === "failed" || statusAirports === "failed")
    return <p>Errore: {error || errorAirports}</p>;

  function handleSubmit(e) {
    e.preventDefault();
    if (
      selectedOrigin &&
      selectedDestination &&
      selectedClass &&
      selectedAirplane
    ) {
      dispatchFootPrint(
        fetchFootPrint({
          origin: selectedOrigin?.value,
          destination: selectedDestination?.value,
          cabinClass: selectedClass?.value,
        })
      );
    } else {
      alert("Enter all data before proceeding");
    }
  }

  return (
    <div className={className}>
      {children}
      <StyledForm>
        <StyledContainerImageBg></StyledContainerImageBg>
        <StyledRowOne>
          <StyledLabel htmlFor="origin">Partenza</StyledLabel>
          <StyledInput
            options={listAirports.map((airport) => ({
              value: airport.code,
              label: `${airport.name} - ${airport.city} - ${airport.state}`,
            }))}
            value={selectedOrigin}
            onChange={(option) => dispatchFootPrint(setOrigin(option))}
            id="origin"
            styles={customStylesInput}
          />
          <StyledLabel htmlFor="airplane">Aereo</StyledLabel>
          <StyledInput
            options={list.map((airplanes) => ({
              value: airplanes.seating,
              label: `${airplanes.model}`,
            }))}
            value={selectedAirplane}
            onChange={(option) => dispatchFootPrint(setAirplane(option))}
            id="airplane"
            styles={customStylesInput}
          />

          <StyledLabelPassengers>
            <p>Passeggeri</p>
          </StyledLabelPassengers>

          <StyledContainaerCounter>
            <StyledButtonCounter
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              −
            </StyledButtonCounter>
            <span>{count}</span>

            <StyledButtonCounter
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </StyledButtonCounter>
          </StyledContainaerCounter>
        </StyledRowOne>
        <StyledRowTwo>
          <StyledLabel htmlFor="destination">Destinazione</StyledLabel>
          <StyledInput
            options={listAirports.map((airport) => ({
              value: airport.code,
              label: `${airport.name} - ${airport.city} - ${airport.state}`,
            }))}
            value={selectedDestination}
            onChange={(option) => dispatchFootPrint(setDestination(option))}
            id="destination"
            styles={customStylesInput}
          />
          <StyledLabel htmlFor="class">Classe</StyledLabel>
          <StyledInput
            options={classe.map((classe) => ({
              value: classe.value,
              label: `${classe.label}`,
            }))}
            value={selectedClass}
            onChange={(option) => dispatchFootPrint(setClass(option))}
            id="class"
            styles={customStylesInput}
          />
        </StyledRowTwo>
        <StyledRowButton>
          <StyledButtonForm onClick={handleSubmit}>
            <span>Calcola la tua impronta</span>
          </StyledButtonForm>
          <StyledContainerFootPrintImage></StyledContainerFootPrintImage>
        </StyledRowButton>
      </StyledForm>
    </div>
  );
}

export default ContainerForm;
