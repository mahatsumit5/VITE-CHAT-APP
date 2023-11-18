import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Users from "../components/chatRoomPage/Users";
import MessageBoxHeader from "../components/chatRoomPage/MessageBoxHeader";
import { useDispatch, useSelector } from "react-redux";
import { getChatRoomAction } from "../action/chatRoomAction";
import FooterNavigation from "../components/chatRoomPage/FooterNavigation";
import CustomDrawer from "../components/CustomDrawer";

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
      <MessageBoxHeader />
      <CustomDrawer />
      {/* <CustomModal /> */}
      <Divider />
      <Box sx={{ flexGrow: 1 }}>
        <Users />
      </Box>
      <Divider />
      <FooterNavigation />
    </>
  );
};

export default ChatRoom;
