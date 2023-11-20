import React, { useState } from "react";
import UserLayout from "../components/UserLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../axios/userAxios";

function ForgotPassword() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleReset = async () => {
    if (user?.id) {
      // reset password here
      return;
    }
    // get user here
    const { status, data } = await resetPassword(email);
    if (status === "success") {
      setUser(data);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
          m: "auto",
          width: 400,
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <div>
          <Button
            variant="text"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </Button>
        </div>
        <>
          <Typography variant="h4" align="center">
            Reset your password
          </Typography>
          {user?.id ? (
            <TextField label="Enter your new password" type="password" />
          ) : (
            <TextField
              label="Enter your email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          )}
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
        </>
      </Box>
    </>
  );
}

export default ForgotPassword;
