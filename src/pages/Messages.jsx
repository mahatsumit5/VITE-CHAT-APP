import { Box } from "@mui/material";
import React, { useEffect } from "react";
import MessagesComp from "../components/chatPage/MessagesComp";
import Header from "../components/chatPage/Header";
import InputField from "../components/chatPage/InputField";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getChatRoomByIdAction } from "../action/chatRoomAction";
const Messages = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatRoomByIdAction(id));
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Header />

      <MessagesComp />

      <InputField id={id} />
    </Box>
  );
};

export default Messages;
