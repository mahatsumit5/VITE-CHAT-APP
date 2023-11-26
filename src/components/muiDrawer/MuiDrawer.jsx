import {
  Avatar,
  Box,
  Button,
  Divider,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggleMenu } from "../../redux/sideBarSlice";
import UploadProfile from "../uploadProfiePicture/UploadProfile";
import CloseIcon from "@mui/icons-material/Close";
import DrawerMenu from "./DrawerMenu";
import { serverUrl } from "../../constant";

function MuiDrawer() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.sideBar);
  const { user } = useSelector((store) => store.user);

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={() => {
        dispatch(setToggleMenu(false));
      }}
    >
      <Box sx={{ width: 280 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <Avatar src={`${serverUrl}${user.profile?.slice(6)}`} />

            <Typography variant="body2" sx={{ mt: 1 }}>
              Hi,
              {user.fName?.toUpperCase()}&nbsp;
              {user.lName?.toUpperCase()}
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
        <UploadProfile />
        <DrawerMenu />
      </Box>
    </SwipeableDrawer>
  );
}

export default MuiDrawer;
