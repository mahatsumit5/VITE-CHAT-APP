import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Users from "../components/chatRoomPage/Users";
import MessageBoxHeader from "../components/chatRoomPage/MessageBoxHeader";
import { useDispatch, useSelector } from "react-redux";
import { getChatRoomAction } from "../action/chatRoomAction";
import CustomDrawer from "../components/CustomDrawer";
import Messages from "../components/chatPage/Messages";

const ChatRoom = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  async function getRooms() {
    dispatch(getChatRoomAction(user.id));
  }
  useEffect(() => {
    getRooms();
  }, []);

  return (
    <>
      {/* users information */}
      <Box sx={{ width: "40%", p: 1 }}>
        <MessageBoxHeader />
        <Users />
      </Box>
      <Divider orientation="vertical" />
      <Box sx={{ width: "60%" }}>
        <Messages />
      </Box>
    </>
  );
};

export default ChatRoom;
