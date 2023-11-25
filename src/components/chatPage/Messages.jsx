import { Box, Divider } from "@mui/material";
import React, { useEffect } from "react";
import MessagesComp from "./MessagesComp";
import Header from "./Header";
import InputField from "./InputField";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getChatRoomByIdAction } from "../../action/chatRoomAction";
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
