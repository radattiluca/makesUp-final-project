import { createSlice } from "@reduxjs/toolkit";

export const counterPassengersSlice = createSlice({
  name: "counterPassengers",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      if (state.value >= 25) {
        state.value = 25;
      } else {
        state.value += 1;
      }
    },
    decrement: (state) => {
      state.value -= 1;
      if (state.value < 1) {
        state.value = 1;
      }
    },
  },
});

export const { increment, decrement } = counterPassengersSlice.actions;

export const counterPassengersReducer = counterPassengersSlice.reducer;
