import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { getUserByEmail } from "../axios/userAxios";
import { loginAction } from "../action/userAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleLogin = async () => {
    const status = await dispatch(loginAction(email));
    if (status === true) {
      navigate("/chat");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h6">Log in to your account</Typography>
      <FormControl
        sx={{
          width: 320,
          display: "flex",
          gap: 2,
          boxShadow: 2,
          p: 2,
          borderRadius: 2,
        }}
      >
        <TextField
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
