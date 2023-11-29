import { Avatar, Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFriendIndex } from "../../../getFriendIndexFunction";
import { getChatRoomByIdAction } from "../../../action/chatRoomAction";
import { serverUrl } from "../../../constant";

const ChatRoom = ({ setResponsiveDisplay }) => {
  const indexArray = [];
  const { chatRoom } = useSelector((store) => store.chatRoom);
  const { user } = useSelector((store) => store.user);
  for (let i = 0; i < chatRoom.length; i++) {
    const x = getFriendIndex(chatRoom[i].user, user.id);

    indexArray.push(x);
  }
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(getChatRoomByIdAction(id));
    setResponsiveDisplay(true);
  };

  return (
    <>
      {chatRoom?.map((room, i) => {
        return (
          <Link
            key={room.id}
            style={{
              color: "black",
              fontStyle: "normal",
              textDecoration: "none",
            }}
            onClick={() => {
              handleClick(room.id);
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",

                mt: 3,
                gap: 3,
              }}
            >
              <Avatar
                sx={{ width: 35, height: 35 }}
                src={
                  room?.user[indexArray[i]]?.profile
                    ? `${serverUrl}${room?.user[indexArray[i]]?.profile?.slice(
                        6
                      )}`
                    : null
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1">
                  {room.user[indexArray[i]]?.fName.toUpperCase()}&nbsp;
                  {room.user[indexArray[i]]?.lName.toUpperCase()}&nbsp;
                </Typography>

                <Typography variant="caption" color={"dimgray"}>
                  {room?.messages[room.messages.length - 1]?.content}
                </Typography>
              </Box>
            </Box>
            <Divider />
          </Link>
        );
      })}
    </>
  );
};

export default ChatRoom;
