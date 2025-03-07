import { createSlice } from "@reduxjs/toolkit";

//here we store the data related to your selections. is initialized the empty state that will then be filled with values that will be passed by its Select

const initialState = {
  selectedOrigin: null,
  selectedDestination: null,
  selectedClass: null,
  selectedAirplane: null,
};

const flightSelectionSlice = createSlice({
  name: "flightSelection",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.selectedOrigin = action.payload; //action peyod è il valore passato quando chiamiamo l'azione. ad esempio viene selezionata la città
    },
    setDestination: (state, action) => {
      state.selectedDestination = action.payload;
    },
    setClass: (state, action) => {
      state.selectedClass = action.payload;
    },

    setAirplane: (state, action) => {
      state.selectedAirplane = action.payload;
    },
  },
});

// Esporta le azioni per usarle nei componenti tramite dispatch
export const { setOrigin, setDestination, setClass, setAirplane } =
  flightSelectionSlice.actions;

// Esporta il reducer per usarlo nel tuo store
export const flightSelectionReducer = flightSelectionSlice.reducer;
