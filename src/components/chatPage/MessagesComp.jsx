import { Avatar, Box, Container, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const MessagesComp = () => {
  const { currentRoom } = useSelector((store) => store.currentRoom);
  const { user } = useSelector((store) => store.user);
  const { messages } = currentRoom;

  return (
    <>
      <Box sx={{ flexGrow: 1, overflow: "auto", my: 2 }}>
        {messages?.map((message) => {
          return (
            <Box
              key={message.id}
              sx={{
                display: "flex",
                flexDirection: "column",

                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",

                  width: "100%",
                  gap: 1,
                }}
              >
                {user.id !== message.toId && (
                  <Typography
                    sx={{
                      backgroundColor: "blueviolet",
                      p: 1,
                      display: "flex",
                      gap: 1,
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    {message.content}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  width: "100%",
                  gap: 2,
                }}
              >
                {user.id === message.toId && (
                  <>
                    <Avatar sx={{ width: 40, height: 40 }} />
                    <Typography
                      sx={{
                        backgroundColor: "lightgrey",
                        p: 1,

                        borderRadius: "15px",
                      }}
                    >
                      {message.content}
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default MessagesComp;
