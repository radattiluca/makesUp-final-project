import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFootPrint = createAsyncThunk(
  "footPrint/fetchFootPrint",
  async ({ origin, destination, cabinClass }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.goclimate.com/v1/flight_footprint",
        {
          headers: {
            Authorization: `Basic ${btoa(import.meta.env.VITE_API_KEY + ":")}`,
          },
          params: {
            "segments[0][origin]": origin,
            "segments[0][destination]": destination,
            cabin_class: cabinClass,
            "currencies[]": ["EUR"],
          },
        }
      );
      console.log("dentro la chiamata: " + response.data.footprint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Errore nella richiesta");
    }
  }
);

const footPrintSlice = createSlice({
  name: "footprint",
  initialState: {
    footprint: null,
    offset_prices: [],
    details_url: "",
    statusFootPrint: "idle", // idle | loading | succeeded | failed
    errorFootPrint: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootPrint.pending, (state) => {
        state.statusFootPrint = "loading";
      })
      .addCase(fetchFootPrint.fulfilled, (state, action) => {
        console.log(
          "Azione fulfilled, payload ricevuto:",
          action.payload.offset_prices
        );
        state.statusFootPrint = "succeeded";
        state.footprint = action.payload.footprint; // Aggiorna solo il valore footprint
        state.offset_prices = action.payload.offset_prices; // Salva prezzi offset
        state.details_url = action.payload.details_url; // Salva il link per compensare
      })
      .addCase(fetchFootPrint.rejected, (state, action) => {
        state.statusFootPrint = "failed";
        state.errorFootPrint = action.payload;
      });
  },
});

export const footPrintReducer = footPrintSlice.reducer;
