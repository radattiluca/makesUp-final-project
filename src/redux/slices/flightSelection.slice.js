import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedOrigin: null,
  selectedDestination: null,
  selectedClass: null,
};

const flightSelectionSlice = createSlice({
  name: "flightSelection",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.selectedOrigin = action.payload;
    },
    setDestination: (state, action) => {
      state.selectedDestination = action.payload;
    },
    setClass: (state, action) => {
      state.selectedClass = action.payload;
    },
  },
});

// Esporta le azioni per usarle nei componenti
export const { setOrigin, setDestination, setClass } =
  flightSelectionSlice.actions;

// Esporta il reducer per usarlo nel tuo store
export const flightSelectionReducer = flightSelectionSlice.reducer;
