import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Users from "./Users";
import { Box, Button, Typography } from "@mui/material";
const MessageBoxHeader = ({ setOpen, open }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-start" }}>
      <a
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuIcon color="primary" />
      </a>

      <Typography variant="h6"> My Chat</Typography>
    </Box>
  );
};

export default MessageBoxHeader;
