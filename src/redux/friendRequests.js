import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friendReq: [],
  sentReq: [],
};

const friendReqSlice = createSlice({
  name: "friendReq",
  initialState,
  reducers: {
    setFriendReq: (state, { payload }) => {
      state.friendReq = payload;
    },
    setSentReq: (state, { payload }) => {
      state.sentReq = payload;
    },
  },
});

const { reducer, actions } = friendReqSlice;
export const { setFriendReq, setSentReq } = actions;
export default reducer;
