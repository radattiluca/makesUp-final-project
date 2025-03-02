import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Funzione asincrona per recuperare i dati dal file locale JSON
export const fetchAirplanes = createAsyncThunk(
  "airplanes/fetchAirplanes",
  async () => {
    const response = await fetch("/data/json/airplanes.json"); // Percorso relativo al file JSON
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dati");
    }
    return await response.json();
  }
);

const airplanesSlice = createSlice({
  name: "airplanes",
  initialState: {
    list: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirplanes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAirplanes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchAirplanes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const airplanesReducer = airplanesSlice.reducer;
