import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { postUser } from "../axios/userAxios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await postUser(form);
    if (data.status === true) {
      navigate("/login");
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
        backgroundColor: "",
        gap: 2,
      }}
    >
      <Typography variant="h6">Create a new account</Typography>

      <FormControl
        sx={{
          width: 350,
          display: "flex",
          gap: 2,
          boxShadow: 2,
          p: 2,
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            onChange={handleChange}
            value={form.fName}
            label="First Name*"
            name="fName"
          />
          <TextField
            onChange={handleChange}
            value={form.lName}
            label="Last Name*"
            name="lName"
          />
        </Box>

        <TextField
          onChange={handleChange}
          value={form.email}
          label="Email*"
          name="email"
        />
        <TextField
          onChange={handleChange}
          value={form.password}
          label="Password*"
          name="password"
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Sign up
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
