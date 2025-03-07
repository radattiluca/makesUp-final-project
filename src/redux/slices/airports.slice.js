//in this slice we retrieve the airport data from the file airports.JSON

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAirports = createAsyncThunk(
  "airports/fetchAirports",
  async () => {
    const response = await fetch("/data/json/airports.json");
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
    statusAirports: "idle",
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
