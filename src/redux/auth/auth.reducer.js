import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetail: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getLoginDetail: (state, action) => {
      state.userDetail = action.payload;
    },
    fetchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getLoginDetail, fetchLoading } = authSlice.actions;
export default authSlice.reducer;
