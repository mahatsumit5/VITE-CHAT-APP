import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Users = ({ user, setSelecteduser }) => {
  return (
    <a
      onClick={() => {
        setSelecteduser(user);
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", mt: 3, gap: 2 }}
      >
        <Avatar />
        <Typography variant="caption">{user.fName.toUpperCase()}</Typography>
        <Typography variant="caption">{user.lName.toUpperCase()}</Typography>
      </Box>
    </a>
  );
};

export default Users;
