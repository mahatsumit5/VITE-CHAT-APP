import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { serverUrl } from "../../constant";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { setMainDisplay } from "../../redux/sideMenuSlice";
import defaultImg from "/default.png";
const User = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store) => store.user);
  const profile = currentUser.profile
    ? `${serverUrl}` + "/" + currentUser.profile?.slice(7)
    : defaultImg;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: 2,
        borderLeft: { xs: 0, sm: 1 },
        borderColor: "darkgray",
      }}
    >
      <Button
        sx={{ marginRight: 25 }}
        onClick={() => {
          dispatch(setMainDisplay("main"));
        }}
      >
        <ArrowBackIosIcon />
      </Button>
      <Box
        sx={{
          width: 200,
          height: 200,

          borderRadius: "50%",
          boxShadow: 3,
        }}
      >
        <img
          src={profile}
          height={"100%"}
          width={"100%"}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      </Box>
      {/* currentUser information */}
      <Button variant="contained">Add friend</Button>
      <Typography variant="h5">
        {currentUser.fName}&nbsp;{currentUser.lName}
      </Typography>
      <Typography variant="h5">{currentUser.email}</Typography>
    </Box>
  );
};

export default User;
