import {
  Avatar,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../axios/userAxios";
import Users from "../components/chatRoomPage/Users";
import MessageBoxHeader from "../components/chatRoomPage/MessageBoxHeader";
import Messages from "../components/chatPage/MessagesComp";
import { sendMessage } from "../axios/messageAxios";
import { getChatRoom } from "../axios/chatRoomAxios";
import { useDispatch, useSelector } from "react-redux";
import { getChatRoomAction } from "../action/chatRoomAction";
import { getFriendIndex } from "../getFriendIndexFunction";
import FooterNavigation from "../components/chatRoomPage/FooterNavigation";

const ChatRoom = () => {
  const { user } = useSelector((store) => store.user);
  const { chatRoom } = useSelector((store) => store.chatRoom);
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(true);

  async function getRooms() {
    dispatch(getChatRoomAction(user.id));
  }
  useEffect(() => {
    getRooms();
    if (!chatRoom) {
      return;
    }
  }, []);

  return (
    <>
      <MessageBoxHeader setOpen={setOpen} open={isOpen} />
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
