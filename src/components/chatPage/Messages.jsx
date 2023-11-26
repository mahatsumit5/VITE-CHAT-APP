import { Box, Divider } from "@mui/material";
import React from "react";
import MessagesComp from "./MessagesComp";
import Header from "./Header";
import InputField from "./InputField";

const Messages = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        gap: 2,
      }}
    >
      <Header />
      <Divider />

      <MessagesComp />
      <InputField />
    </Box>
  );
};

export default Messages;
