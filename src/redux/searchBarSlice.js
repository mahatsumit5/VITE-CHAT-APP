import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setSearchBar: (state, { payload }) => {
      state.isOpen = payload;
    },
  },
});

const { reducer, actions } = searchBarSlice;
export const { setSearchBar } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
