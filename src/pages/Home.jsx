import { Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../assests/logo.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "lightskyblue",
      }}
    >
      <div style={{ height: "150px", width: "150px" }}>
        <img src={logo} alt="" height={"100%"} width={"100%"} />
      </div>
      <Typography variant="h6">Welcome to My Chat</Typography>
      <Typography variant="h6">Login to your account to continue.</Typography>
      <div>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
        <Button variant="contained" color="success" sx={{ marginLeft: 2 }}>
          Sign up
        </Button>
      </div>
    </Box>
  );
};

export default Home;
