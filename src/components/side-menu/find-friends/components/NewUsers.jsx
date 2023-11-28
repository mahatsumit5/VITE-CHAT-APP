import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../../axios/userAxios";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import {
  deleteFriendReqAction,
  sendFriendRequestsAction,
} from "../../../../action/friendReqAction";
import { socket } from "../../../../socketIo/socket";
const NewUsers = ({ users }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { chatRoom } = useSelector((store) => store.chatRoom);
  const { sentReq } = useSelector((store) => store.friendReq);

  const handleAddFriend = async (id) => {
    const obj = {
      from: user.id,
      to: id,
    };
    socket.emit("send_friendReq", obj);
    dispatch(sendFriendRequestsAction(obj));
  };

  const deleteSentReq = (id) => {
    const obj = { from: user.id, to: id };
    socket.emit("delete_request", obj);
    dispatch(deleteFriendReqAction(obj));
  };
  let bool = [];
  users.map((u) => {
    for (let i = 0; i < sentReq.length; i++) {
      if (u.id === sentReq[i].toId) {
        return bool.push(true);
      }
    }
    bool.push(false);
  });

  return (
    <>
      {users.map((user, index) => {
        chatRoom.map((room) => {
          const x = room.user.filter((roomUser) => roomUser.id === user.id);
        });

        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              mt: 2,
              gap: 2,
            }}
            key={user.id}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <Avatar
                sx={{ width: 45, height: 45 }}
                src={
                  user.profile
                    ? "http://localhost:8000/public/" + user.profile
                    : undefined
                }
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Typography
                  variant="body2"
                  color={"grey"}
                  sx={{ mt: 1, fontSize: 15 }}
                >
                  {user.fName.toUpperCase()}&nbsp;
                  {user.lName.toUpperCase()}&nbsp;
                </Typography>
              </Box>
            </Box>

            {bool[index] ? (
              <Button
                variant="contained"
                color="error"
                startIcon={<ClearIcon color="white" />}
                onClick={() => {
                  deleteSentReq(user.id);
                }}
              >
                Cancel request
              </Button>
            ) : (
              <Button
                variant="contained"
                startIcon={<PersonAddAltIcon color="white" />}
                onClick={() => {
                  handleAddFriend(user.id);
                }}
              >
                Add Friend
              </Button>
            )}
          </Box>
        );
      })}
    </>
  );
};

export default NewUsers;
