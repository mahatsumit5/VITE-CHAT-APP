import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { loginAction } from "../action/userAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Loading/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setform] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    const status = await dispatch(loginAction(form));

    if (status === "success") {
      navigate("/chat");
    }
    setIsLoading(false);
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
          name="email"
          type="email"
          onChange={handleChange}
        />
        <TextField
          label="password*"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <Link to={"/reset-password"}>
          <Typography variant="subtitle">Reset Password.</Typography>
        </Link>
        <Button variant="contained" onClick={handleLogin} disabled={isLoading}>
          {isLoading ? "Please wait..." : "Login"}
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
