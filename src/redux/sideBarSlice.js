import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};

const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState,
  reducers: {
    setToggleMenu: (state, { payload }) => {
      state.isOpen = payload;
    },
  },
});

const { reducer, actions } = toggleMenuSlice;
export const { setToggleMenu } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
