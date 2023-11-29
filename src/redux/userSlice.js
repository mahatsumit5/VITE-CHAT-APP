import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  currentUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setUser, setCurrentUser } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
