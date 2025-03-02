import { configureStore } from "@reduxjs/toolkit";
import { counterPassengersReducer } from "./slices/couterPassengers.slice";
import { airplanesReducer } from "./slices/airplanes.slice";
import { airportsReducer } from "./slices/airports.slice";

export default configureStore({
  reducer: {
    counterPassengers: counterPassengersReducer,
    airplanes: airplanesReducer,
    airports: airportsReducer,
  },
});
