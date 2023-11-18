import { Avatar, Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFriendIndex } from "../../getFriendIndexFunction";

let index;

const Users = () => {
  const indexArray = [];
  const { chatRoom } = useSelector((store) => store.chatRoom);
  const { user } = useSelector((store) => store.user);
  for (let i = 0; i < chatRoom.length; i++) {
    const x = getFriendIndex(chatRoom[i].user, user.id);

    indexArray.push(x);
  }

  return (
    <>
      {chatRoom?.map((room, i) => {
        return (
          <Link
            to={`/chat/${room.id}`}
            key={room.id}
            style={{
              color: "black",
              fontStyle: "normal",
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",

                mt: 2,
                gap: 2,
              }}
            >
              <Avatar sx={{ width: 35, height: 35 }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1">
                  {room.user[indexArray[i]]?.fName.toUpperCase()}&nbsp;
                  {room.user[indexArray[i]]?.lName.toUpperCase()}&nbsp;
                  {room.user[indexArray[i]]?.email}
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

export default Users;
