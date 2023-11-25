import { Box, Button } from "@mui/material";
import React from "react";
import SmsIcon from "@mui/icons-material/Sms";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LogoutIcon from "@mui/icons-material/Logout";
const DrawerMenu = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 2 }}>
      <Button variant="contained" color="info" startIcon={<SmsIcon />}>
        Chat
      </Button>
      <Button variant="contained" color="info" startIcon={<Diversity1Icon />}>
        Friends
      </Button>
      <Button
        variant="contained"
        color="info"
        startIcon={<PersonAddAlt1Icon />}
      >
        Friend requests
      </Button>
      <Button
        variant="contained"
        color="info"
        startIcon={<PersonAddAlt1Icon />}
      >
        Sent requests
      </Button>
      <Button variant="contained" color="info" startIcon={<LogoutIcon />}>
        Logout
      </Button>
    </Box>
  );
};

export default DrawerMenu;
