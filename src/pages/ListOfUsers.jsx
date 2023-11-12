import { Box, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import NewUsers from "../components/ListOfusers/NewUsers";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useNavigate } from "react-router-dom";
const ListOfUsers = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <div style={{ display: "flex" }}>
        <ArrowLeftIcon
          sx={{ mt: 1, fontSize: 30, color: "blue" }}
          onClick={() => {
            navigate(-1);
          }}
        />
        <TextField
          fullWidth
          placeholder="Search for People"
          sx={{ my: 1 }}
          size="small"
        />
      </div>

      <Divider sx={{ color: "blue" }} />
      <Typography mt={2} color={"grey"}>
        Find New Friends
      </Typography>

      <NewUsers />
    </Box>
  );
};

export default ListOfUsers;
