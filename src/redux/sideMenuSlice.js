import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  display: "chat",
};
const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplay: (state, { payload }) => {
      state.display = payload;
    },
  },
});

const { reducer, actions } = displaySlice;
export const { setDisplay } = actions;
export default reducer;
