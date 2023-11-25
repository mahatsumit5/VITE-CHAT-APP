import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFriendIndex } from "../../getFriendIndexFunction";
import { deleteChatRoomAction } from "../../action/chatRoomAction";
const Header = () => {
  const { currentRoom } = useSelector((store) => store.currentRoom);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const x = getFriendIndex(currentRoom.user, user.id);
  const handleDelete = () => {
    const updateRooms = user.chatRoom.map((room) => {
      if (room.id !== currentRoom.id) {
        return room;
      }
    });
    console.log(updateRooms);
    const obj = {
      email: user.email,
      chatRoom: updateRooms,
    };
    dispatch(deleteChatRoomAction(currentRoom.id, obj));
  };
  return (
    <>
      {currentRoom.id && (
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
          {/* user name */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar sx={{ width: 25, height: 25 }} />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {currentRoom?.user[x].fName.toUpperCase()}&nbsp;
              {currentRoom?.user[x].lName.toUpperCase()}
            </Typography>
          </Box>
          {/* Icons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <PhoneEnabledIcon color="success" />
            <VideocamIcon color="primary" />
            <DeleteForeverIcon color="error" onClick={handleDelete} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;
