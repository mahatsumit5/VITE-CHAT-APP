import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { changePassword, getUserToResetPassword } from "../axios/userAxios";
import { toast } from "react-toastify";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const params = useSearchParams();
  const code = params[0].get("code");
  const e = params[0].get("e");
  const [error, setError] = useState("");
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [formtoShow, setForm] = useState("RequestLink");
  const navigate = useNavigate();
  const handleReset = async (event, name) => {
    if (name) {
      console.log(name);
      if (password.confirmPassword !== password.newPassword) {
        return setError("Password does not match.");
      }
      const { status, message } = await changePassword({
        email: e,
        newPassword: password.confirmPassword,
      });
      toast[status](message);

      if (status === "success") {
        navigate("/login");
      }
      return; //stop code execution here
    }

    const { status, message, link } = await getUserToResetPassword(email);
    if (status === "success") {
      window.location.assign(link);
      setForm("ResetPassword");
    }
    toast[status](message);
  };
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
    if (value.length < 8) {
      return setError("Password must be eight characters long");
    }

    setError("");
    console.log(name, value);
  };
  const RequestLink = (
    <>
      <Typography variant="h4" align="left">
        Enter your email.
      </Typography>
      <TextField
        label="Enter your email"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <Button variant="contained" onClick={handleReset}>
        Submit
      </Button>
    </>
  );
  const ResetPassword = (
    <>
      <Typography variant="h5" align="left">
        Create New Password
      </Typography>

      <TextField
        label="New password"
        name="newPassword"
        type="password"
        onChange={handlePasswordChange}
      />
      <TextField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        onChange={handlePasswordChange}
      />
      <Typography variant="caption" color={"red"}>
        {error}
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          handleReset(e, "reset");
        }}
      >
        Submit
      </Button>
    </>
  );
  const forms = {
    RequestLink: RequestLink,
    ResetPassword: ResetPassword,
  };
  useEffect(() => {
    if (!code || !e) {
      return;
    }
    setForm("ResetPassword");
  }, [code, e]);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "column",
        m: "auto",
        width: 360,
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
      {forms[formtoShow]}
    </Box>
  );
}

export default ForgotPassword;
