import { Box, Divider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewUsers from "./components/NewUsers";
import { getAllUsers } from "../../../axios/userAxios";
import { useSelector } from "react-redux";
const ListOfUsers = () => {
  const { user } = useSelector((store) => store.user);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function getusers() {
    const { status, users } = await getAllUsers(user.email);
    if (status === true) {
      setUsers(users);
      setFilteredUsers(users);
    }
  }
  const handleSearch = (e) => {
    const { value } = e.target;
    const filteredUsers = users.filter(
      (user) =>
        user.fName.toLowerCase().includes(value.toLowerCase()) ||
        user.lName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  useEffect(() => {
    getusers();
    setFilteredUsers(users);
  }, []);

  return (
    <Box sx={{ width: "100%", p: 1 }}>
      <div style={{ display: "flex" }}>
        <TextField
          fullWidth
          placeholder="Search for People"
          sx={{ my: 1 }}
          size="small"
          onChange={handleSearch}
        />
      </div>

      {/* <Divider sx={{ color: "blue" }} /> */}
      <Typography mt={2} color={"grey"}>
        Find New Friends
      </Typography>

      <NewUsers users={filteredUsers} />
    </Box>
  );
};

export default ListOfUsers;
