import { configureStore } from "@reduxjs/toolkit";
import { counterPassengersReducer } from "./slices/couterPassengers.slice";
import { airplanesReducer } from "./slices/airplanes.slice";
import { airportsReducer } from "./slices/airports.slice";
import { footPrintReducer } from "./slices/footPrintClientApi.slice";
import { flightSelectionReducer } from "./slices/flightSelection.slice";

export default configureStore({
  reducer: {
    counterPassengers: counterPassengersReducer,
    airplanes: airplanesReducer,
    airports: airportsReducer,
    footprint: footPrintReducer,
    flightSelection: flightSelectionReducer,
  },
});
