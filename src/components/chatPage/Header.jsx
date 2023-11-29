import { Avatar, Box, Button, MenuItem, Typography } from "@mui/material";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useDispatch, useSelector } from "react-redux";
import { getFriendIndex } from "../../getFriendIndexFunction";
import { deleteChatRoomAction } from "../../action/chatRoomAction";
import { serverUrl } from "../../constant";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { setMainDisplay } from "../../redux/sideMenuSlice";
import { setCurrentUser } from "../../redux/userSlice";
const Header = ({ setResponsiveDisplay }) => {
  const { currentRoom } = useSelector((store) => store.currentRoom);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const friendIndex = getFriendIndex(currentRoom.user, user.id);
  const handleDelete = () => {
    const updateRooms = user.chatRoom.map((room) => {
      if (room.id !== currentRoom.id) {
        return room;
      }
    });
    const obj = {
      email: user.email,
      chatRoom: updateRooms,
    };
    dispatch(deleteChatRoomAction(currentRoom.id, obj));
  };
  // const profilePic = currentRoom?.user[friendIndex]?.profile
  //   ? `${serverUrl}${currentRoom?.user[friendIndex]?.profile?.slice(6)}`
  //   : null;
  return (
    <>
      {currentRoom.id && (
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
          {/* user name */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              size="small"
              onClick={() => {
                setResponsiveDisplay(false);
              }}
            >
              <ArrowBackIosIcon color="secondary" />
            </Button>
            <MenuItem
              onClick={() => {
                dispatch(setCurrentUser(currentRoom.user[friendIndex]));
                dispatch(setMainDisplay("user"));
              }}
            >
              <Avatar
                sx={{ width: 25, height: 25 }}
                src={
                  currentRoom?.user[friendIndex]?.profile
                    ? `${serverUrl}${currentRoom?.user[
                        friendIndex
                      ]?.profile?.slice(6)}`
                    : null
                }
              />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {currentRoom?.user[friendIndex].fName.toUpperCase()}&nbsp;
                {currentRoom?.user[friendIndex].lName.toUpperCase()}
              </Typography>
            </MenuItem>
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
