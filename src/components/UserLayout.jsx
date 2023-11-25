import { Box, Divider } from "@mui/material";
import React from "react";
import FooterNavigation from "./chatRoomPage/FooterNavigation";

const UserLayout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "97vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          height: "90%",
        }}
      >
        {children}
      </Box>
      <Divider />
      <FooterNavigation />
    </Box>
  );
};

export default UserLayout;
