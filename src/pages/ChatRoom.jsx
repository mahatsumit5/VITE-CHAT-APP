import { Avatar, Box, Divider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../axios/userAxios";
import Users from "../components/Users";
import MessageBoxHeader from "../components/MessageBoxHeader";
import Messages from "../components/Messages";

const ChatRoom = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelecteduser] = useState({});
  const [isOpen, setOpen] = useState(true);
  async function getusers() {
    const { status, users } = await getAllUsers();
    if (status === true) {
      setUsers(users);
      setSelecteduser(users[0]);
    }
  }
  useEffect(() => {
    getusers();
  }, []);

  return (
    <Box
      sx={{
        height: "90vh",
        width: "70vw",
        m: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: 2,
        borderRadius: 5,
        p: 4,
      }}
    >
      <MessageBoxHeader setOpen={setOpen} open={isOpen} />
      <Divider />
      <Box sx={{ display: "flex", height: "100%" }}>
        {/* user information */}
        {isOpen && (
          <Box
            sx={{
              width: "40%",

              p: 1,
              borderRight: 2,
              color: "grey",
            }}
          >
            <TextField fullWidth sx={{ borderRadius: 12 }} label="Search" />
            {users.map((user) => (
              <Users
                key={user.id}
                user={user}
                setSelecteduser={setSelecteduser}
              />
            ))}
          </Box>
        )}
        {/* chat box */}
        <Box
          sx={{
            width: isOpen ? "60%" : "100%",
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            gap: 2,
            flexDirection: "column",
          }}
        >
          {/* headers */}
          <Box>
            <Avatar />
            <Typography variant="body1">{selectedUser.fName}</Typography>
            <Divider />
          </Box>
          {/* messages */}
          <Box sx={{}}>
            <Messages />
          </Box>
          {/* input field */}
          <Box>
            <TextField fullWidth name="message" />
          </Box>
          {/* header */}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatRoom;
