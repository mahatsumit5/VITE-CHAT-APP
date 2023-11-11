import { Box } from "@mui/material";
import React from "react";

const UserLayout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "90vh",
        width: "400px",
        m: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: 2,
        borderRadius: 3,
        p: 2,
        mt: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default UserLayout;
