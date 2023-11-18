import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFriendIndex } from "../../getFriendIndexFunction";
const Header = () => {
  const { currentRoom } = useSelector((store) => store.currentRoom);
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const x = getFriendIndex(currentRoom.user, user.id);

  return (
    <>
      {currentRoom.id && (
        <Box sx={{ display: "flex", justifyContent: "space-between", py: 3 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <ChevronLeftIcon
              onClick={() => {
                navigate(-1);
              }}
            />
            <Avatar sx={{ width: 25, height: 25 }} />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {currentRoom?.user[x].fName.toUpperCase()}&nbsp;
              {currentRoom?.user[x].lName.toUpperCase()}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <PhoneEnabledIcon color="primary" />
            <VideocamIcon color="primary" />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;
