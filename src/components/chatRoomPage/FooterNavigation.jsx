import { Box } from "@mui/material";
import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
const FooterNavigation = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <ChatIcon color="primary" />
      <CallIcon color="primary" />
      <Link to={"/chat/users"}>
        <PeopleIcon color="primary" />
      </Link>{" "}
    </Box>
  );
};

export default FooterNavigation;
