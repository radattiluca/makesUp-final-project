import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Funzione asincrona per recuperare i dati dal file locale JSON
export const fetchAirports = createAsyncThunk(
  "airports/fetchAirports",
  async () => {
    const response = await fetch("/data/json/airports.json"); // Percorso relativo al file JSON
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dati");
    }
    return await response.json();
  }
);

const airportsSlice = createSlice({
  name: "airports",
  initialState: {
    listAirports: [],
    statusAirports: "idle", // idle | loading | succeeded | failed
    errorAirports: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirports.pending, (state) => {
        state.statusAirports = "loading";
      })
      .addCase(fetchAirports.fulfilled, (state, action) => {
        state.statusAirports = "succeeded";
        state.listAirports = action.payload;
      })
      .addCase(fetchAirports.rejected, (state, action) => {
        state.statusAirports = "failed";
        state.errorAirports = action.error.message;
      });
  },
});

export const airportsReducer = airportsSlice.reducer;
