import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Box, Button, MenuItem, Typography } from "@mui/material";
import { setToggleMenu } from "../../redux/sideBarSlice";
import { useDispatch } from "react-redux";
import { setSearchBar } from "../../redux/searchBarSlice";
const MessageBoxHeader = () => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "space-between",
      }}
    >
      <MenuItem>
        <a
          onClick={() => {
            dispatch(setToggleMenu(true));
          }}
        >
          <MenuIcon color="primary" />
        </a>
      </MenuItem>
      <MenuItem>
        <Typography> Messenger</Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          dispatch(setSearchBar(true));
        }}
      >
        <SearchIcon color="secondary" />
      </MenuItem>
    </Box>
  );
};

export default MessageBoxHeader;
