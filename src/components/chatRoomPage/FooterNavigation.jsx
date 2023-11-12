import { Box, Link } from "@mui/material";
import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import CallIcon from "@mui/icons-material/Call";
const FooterNavigation = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <ChatIcon color="primary" />
      <CallIcon color="primary" />
      <Link href="/users">
        <PeopleIcon color="primary" />
      </Link>{" "}
    </Box>
  );
};

export default FooterNavigation;
