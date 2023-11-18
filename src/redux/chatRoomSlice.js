import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatRoom: [],
};

const chatRoomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setChatRoom: (state, { payload }) => {
      state.chatRoom = payload;
    },
  },
});

const { reducer, actions } = chatRoomSlice;
export const { setChatRoom } = actions;
export default reducer;
