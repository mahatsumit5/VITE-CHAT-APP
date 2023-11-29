import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { sendMessageAction } from "../../action/messageAction";
import { useDispatch, useSelector } from "react-redux";
import { getFriendIndex } from "../../getFriendIndexFunction";

import { getChatRoomByIdAction } from "../../action/chatRoomAction";
import { socket } from "../../socketIo/socket";
const InputField = () => {
  const dispatch = useDispatch();
  const { currentRoom } = useSelector((store) => store.currentRoom);
  const { user } = useSelector((store) => store.user);
  const [content, setContent] = useState("");
  const index = getFriendIndex(currentRoom?.user, user.id);
  const handleSend = async (e) => {
    e.preventDefault();
    const obj = {
      from: user.id,
      content: content,
      to: currentRoom.user[index].id,
    };

    const status = await dispatch(sendMessageAction(obj));
    console.log(status);
    if (status) {
      socket.emit("send_message", content, currentRoom.id);
    }
    setContent("");
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField
        fullWidth
        name="content"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder="Enter your message"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        disabled={!content}
      >
        <SendIcon />
      </Button>
    </Box>
  );
};

export default InputField;
