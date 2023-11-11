import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentRoom: {},
};

const currentRoomSlice = createSlice({
  name: "currentoom",
  initialState,
  reducers: {
    setCurrentRoom: (state, { payload }) => {
      state.currentRoom = payload;
    },
  },
});

const { reducer, actions } = currentRoomSlice;
export const { setCurrentRoom } = actions;
export default reducer;
