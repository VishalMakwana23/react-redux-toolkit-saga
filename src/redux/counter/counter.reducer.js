import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = action.payload;
    },
    decrement: (state, action) => {
      state.count = action.payload;
    },
    reset: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
