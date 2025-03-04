import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const isClickedSlice = createSlice({
  name: "isClicked",
  initialState,
  reducers: {
    buttonClicked: (state) => {
      state.value = !state.value;
    },
  },
});

export const { buttonClicked } = isClickedSlice.actions;

export const isClickedReducer = isClickedSlice.reducer;
