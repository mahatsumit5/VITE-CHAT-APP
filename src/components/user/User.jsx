import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";

const User = ({ user }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 200,
          height: 200,

          borderRadius: 10,
          boxShadow: 1,
        }}
      >
        <img
          src={`http://localhost:8000/` + user.profile.slice(7)}
          height={"100%"}
          width={"100%"}
          style={{ objectFit: "cover" }}
        />
      </Box>
      {/* user information */}
      <Typography variant="h5">
        {user.fName}&nbsp;{user.lName}
      </Typography>
    </Box>
  );
};

export default User;
