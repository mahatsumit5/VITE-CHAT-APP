import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { setToggleMenu } from "../../redux/sideBarSlice";
import { useDispatch } from "react-redux";
const MessageBoxHeader = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}>
      <a
        onClick={() => {
          dispatch(setToggleMenu(true));
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
