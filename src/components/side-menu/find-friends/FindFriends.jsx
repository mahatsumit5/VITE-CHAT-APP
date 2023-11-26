import { Box, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import NewUsers from "./components/NewUsers";
const ListOfUsers = () => {
  return (
    <Box sx={{ width: "100%", p: 1 }}>
      <div style={{ display: "flex" }}>
        <TextField
          fullWidth
          placeholder="Search for People"
          sx={{ my: 1 }}
          size="small"
        />
      </div>

      {/* <Divider sx={{ color: "blue" }} /> */}
      <Typography mt={2} color={"grey"}>
        Find New Friends
      </Typography>

      <NewUsers />
    </Box>
  );
};

export default ListOfUsers;
