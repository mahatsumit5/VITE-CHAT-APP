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
  const { display, mainDisplay } = useSelector((store) => store.sideMenu);
  const [responsiveDisplay, setResponsiveDisplay] = useState(false);
  const dispatch = useDispatch();

  const displayComponent = {
    chat: <ChatRoom setResponsiveDisplay={setResponsiveDisplay} />,
    friends: <Friends />,
    findFriends: <FindFriends />,
    friendRequests: <FriendRequests />,
  };
  const mainDisplayComp = {
    main: <Messages setResponsiveDisplay={setResponsiveDisplay} />,
    user: <User />,
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

    socket.on("deleted_req", (data) => {
      dispatch(getFriendReqAction(user.id));
    });
  }, [socket]);
  return (
    <>
      {/* users information */}
      <Box
        sx={{
          width: { xs: "100%", sm: 350, md: 350 },
          p: 1,
          display: { xs: responsiveDisplay ? "none" : "block", md: "block" },
        }}
      >
        <MessageBoxHeader />
        {displayComponent[display]}
      </Box>
      {/* <Divider orientation="vertical" /> */}
      <Box
        sx={{
          width: "100%",
          display: { xs: responsiveDisplay ? "block" : "none", md: "block" },
        }}
      >
        {mainDisplayComp[mainDisplay]}
      </Box>
      <MuiDrawer />
    </>
  );
};

export default Main;
