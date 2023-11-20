import { Box } from "@mui/material";
import React from "react";

const UserLayout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "80vh",
        width: { xs: "95vw", sm: "400px" },
        m: { xs: "none", sm: "auto" },
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
        gap: 2,
        boxShadow: { xs: "none", sm: "2" },
        borderRadius: 3,
        p: { xs: 1, sm: 2 },
        mt: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default UserLayout;
