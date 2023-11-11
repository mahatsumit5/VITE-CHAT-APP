import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Box, Button, Typography } from "@mui/material";
const MessageBoxHeader = ({ setOpen, open }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}>
      <a
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuIcon color="primary" />
      </a>

      <Typography> Messenger</Typography>
      <SearchIcon color="secondary" />
    </Box>
  );
};

export default MessageBoxHeader;
