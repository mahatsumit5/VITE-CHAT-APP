import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import MessageBoxHeader from "../components/chatRoomPage/MessageBoxHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  getChatRoomAction,
  getChatRoomByIdAction,
} from "../action/chatRoomAction";
import Messages from "../components/chatPage/Messages";
import Friends from "../components/side-menu/friends/Friends";
import ChatRoom from "../components/side-menu/chat-room/ChatRoom";
import FindFriends from "../components/side-menu/find-friends/FindFriends";
import FriendRequests from "../components/side-menu/friend-requests/FriendRequests";
import {
  getFriendReqAction,
  getSentReqAction,
} from "../action/friendReqAction";
import MuiDrawer from "../components/muiDrawer/MuiDrawer";
import User from "../components/user/User";
import { socket } from "../socketIo/socket";
const Main = () => {
  const { user } = useSelector((store) => store.user);
  const { display } = useSelector((store) => store.sideMenu);

  const dispatch = useDispatch();

  const displayComponent = {
    chat: <ChatRoom />,
    friends: <Friends />,
    findFriends: <FindFriends />,
    friendRequests: <FriendRequests />,
  };
  const mainDisplay = {
    main: <Messages />,
    user: <User user={user} />,
  };
  useEffect(() => {
    dispatch(getChatRoomAction(user.id));
    dispatch(getFriendReqAction(user.id));
    dispatch(getSentReqAction(user.id));
  }, [user]);

  useEffect(() => {
    socket.on("receive_message", (data, roomId) => {
      dispatch(getChatRoomByIdAction(roomId));
    });
    socket.on("receive_friendRequest", (data) => {
      if (data) {
        dispatch(getFriendReqAction(data.to));
      }
    });
  }, [socket]);
  return (
    <>
      {/* users information */}
      <Box sx={{ width: 350, p: 1 }}>
        <MessageBoxHeader />
        {displayComponent[display]}
      </Box>
      <Divider orientation="vertical" />
      <Box sx={{ width: "100%" }}>{mainDisplay.main}</Box>
      <MuiDrawer />
    </>
  );
};

export default Main;
