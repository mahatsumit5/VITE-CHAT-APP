import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../axios/userAxios";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { addNewFriendAction } from "../../action/chatRoomAction";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
const NewUsers = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [users, setUsers] = useState([]);
  async function getusers() {
    const { status, users } = await getAllUsers(user.email);
    if (status === true) {
      setUsers(users);
    }
  }
  useEffect(() => {
    getusers();
  }, []);

  const handleAddFriend = (id) => {
    dispatch(addNewFriendAction({ from: user.id, to: id }));
  };
  return (
    <Box sx={{ display: "flex", gap: 3, flexDirection: "column", mt: 2 }}>
      {users.map((user) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",

              mt: 1,
              gap: 2,
            }}
          >
            <Avatar sx={{ width: 35, height: 35 }} />
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Typography variant="body2" color={"grey"}>
                {user.fName.toUpperCase()}&nbsp;
                {user.lName.toUpperCase()}&nbsp;
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<PersonAddAltIcon color="white" />}
              onClick={() => {
                handleAddFriend(user.id);
              }}
            >
              Add friend
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<ClearIcon color="white" />}
              onClick={() => {}}
            >
              Cancel request
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default NewUsers;
