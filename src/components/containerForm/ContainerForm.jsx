import { useEffect, useState } from "react";
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
  StyledContainerForm,
  StyledForm,
  StyledInput,
  StyledRowOne,
  StyledRowTwo,
  StyledLabel,
  StyledRowButton,
  StyledButtonForm,
  StyledContainerImageBg,
  StyledContainerFootPrintImage,
  StyledContainaerCounter,
  StyledButtonCounter,
  StyledLabelPassengers,
} from "./ContainerForm.style";
import { StyledParagraphLoading } from "../loading/Loading.style";

//import images
import airplane from "../../assets/image/airplane.png";

const classe = [
  { value: "economy", label: "Economy" },
  { value: "premium_economy", label: "Premium economy" },
  { value: "business", label: "Business" },
  { value: "first", label: "First" },
];

//questo ci serve per lo stile di react-select
const customStylesInput = {
  control: (provider, state) => ({
    ...provider,
    backgroundColor: "rgb(43, 83, 83, 0.9)",
    borderRadius: "20px",
    color: "#edeced",
    border: "none",
    boxShadow: state.isFocused ? "0 0 5px #edeced" : "none",
    outline: "none",
    "&:hover": {
      boxShadow: "none",
    },
  }),
  input: (provider) => ({
    ...provider,
    color: "#edeced",
  }),
  dropdownIndicator: (provider, state) => ({
    ...provider,
    color: state.isFocused ? "#6d8654" : "#edeced",
    transform: state.selectProps.menuIsOpen ? "rotate(90deg)" : "rotate(0deg)",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      color: "#b9aba3",
    },
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
    backgroundColor: "#edeced",
  }),
  option: (provider, state) => ({
    ...provider,
    fontWeight: state.isSelected ? "800" : "500",
    color: "#edeced",
    backgroundColor: state.isSelected
      ? "rgb(43, 83, 83, 0.4)"
      : "rgb(43, 83, 83, 0.7)",

    borderBottom: "1px solid #edeced",
    cursor: "pointer",
  }),

  singleValue: (provider) => ({
    ...provider,
    color: "#edeced",
  }),

  placeholder: (provider) => ({
    ...provider,
    color: "rgb(185, 171, 163, 0.7)",
  }),
};

function ContainerForm({ className, children }) {
  const [changeText, setChangeText] = useState(false);
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
      setChangeText(true);
    } else {
      alert("Inserire tutti i dati prima di proseguire");
    }
  }

  return (
    <div className={className}>
      {children}
      {status === "succeeded" && statusAirports === "succeeded" ? (
        <StyledForm>
          <StyledContainerImageBg></StyledContainerImageBg>
          <StyledRowOne>
            <StyledLabel htmlFor="origin">Partenza</StyledLabel>
            <StyledInput
              options={listAirports.map((airport) => ({
                value: airport.code,
                label: `${airport.city} - ${airport.name} -  ${airport.state}`,
              }))}
              placeholder="..."
              value={selectedOrigin}
              onChange={(option) => dispatchFootPrint(setOrigin(option))}
              id="origin"
              styles={customStylesInput}
            />
            <StyledLabel htmlFor="destination">Destinazione</StyledLabel>
            <StyledInput
              options={listAirports.map((airport) => ({
                value: airport.code,
                label: `${airport.city} - ${airport.name} -  ${airport.state}`,
              }))}
              placeholder="..."
              value={selectedDestination}
              onChange={(option) => dispatchFootPrint(setDestination(option))}
              id="destination"
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
            <StyledLabel htmlFor="airplane">Aereo</StyledLabel>
            <StyledInput
              options={list.map((airplanes) => ({
                value: airplanes.seating,
                label: `${airplanes.model}`,
              }))}
              placeholder="..."
              value={selectedAirplane}
              onChange={(option) => dispatchFootPrint(setAirplane(option))}
              id="airplane"
              styles={customStylesInput}
              readonly
            />
            <StyledLabel htmlFor="class">Classe</StyledLabel>
            <StyledInput
              options={classe.map((classe) => ({
                value: classe.value,
                label: `${classe.label}`,
              }))}
              placeholder="..."
              value={selectedClass}
              onChange={(option) => dispatchFootPrint(setClass(option))}
              id="class"
              styles={customStylesInput}
              readonly
            />
          </StyledRowTwo>
          <StyledRowButton>
            <StyledButtonForm onClick={handleSubmit}>
              <span>
                {changeText ? "Aggiorna dati" : "Calcola la tua impronta"}
              </span>
            </StyledButtonForm>
            <StyledContainerFootPrintImage></StyledContainerFootPrintImage>
          </StyledRowButton>
        </StyledForm>
      ) : (
        <StyledParagraphLoading>
          <img src={airplane} alt="airplane" />
        </StyledParagraphLoading>
      )}
    </div>
  );
}

export default ContainerForm;
