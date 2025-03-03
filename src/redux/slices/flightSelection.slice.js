import { createSlice } from "@reduxjs/toolkit";

//qui immagazziniamo i dati relativi alle selezioni dell'utente. viene inizializzato lo stato vuoto che poi si riempirà con i valori che verranno passati dai relativi Select

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
