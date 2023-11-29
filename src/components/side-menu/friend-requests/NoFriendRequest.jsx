import { Box, Typography } from "@mui/material";
import React from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const NoFriendRequest = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "darkblue",
            borderRadius: "50%",
            mt: 2,
            color: "white",
          }}
        >
          <PriorityHighIcon />
        </Box>
        <Typography variant="caption">
          Sorry,No Friend Request Available.
        </Typography>
      </Box>
    </>
  );
};

export default NoFriendRequest;
