import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  display: "chat",
  mainDisplay: "main",
};
const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplay: (state, { payload }) => {
      state.display = payload;
    },
    setMainDisplay: (state, { payload }) => {
      state.mainDisplay = payload;
    },
  },
});

const { reducer, actions } = displaySlice;
export const { setDisplay, setMainDisplay } = actions;
export default reducer;
