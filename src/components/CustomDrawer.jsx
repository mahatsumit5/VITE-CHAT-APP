import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { setToggleMenu } from "../redux/sideBarSlice";
const CustomDrawer = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.sideBar);
  const { user } = useSelector((store) => store.user);
  return (
    <Box
      sx={{
        display: isOpen ? "block" : "none",
        position: "absolute",
        top: 17,

        height: "84vh",
        width: "350px",
        bgcolor: "white",
        boxShadow: 1,
        zIndex: 10,
        p: 1,
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Avatar />

          <Typography variant="body2" sx={{ mt: 1 }}>
            Hi,
            {user.fName.toUpperCase()}&nbsp;
            {user.lName.toUpperCase()}
          </Typography>
        </div>
        <Button
          variant="text"
          onClick={() => {
            dispatch(setToggleMenu(false));
          }}
        >
          <CloseIcon />
        </Button>
      </Box>
      <Divider />
      {/* user details */}
      <Box sx={{ display: "flex" }}></Box>
    </Box>
  );
};

export default CustomDrawer;
