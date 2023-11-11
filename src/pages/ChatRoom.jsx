import {
  Avatar,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../axios/userAxios";
import Users from "../components/Users";
import MessageBoxHeader from "../components/MessageBoxHeader";
import Messages from "../components/chatPage/MessagesComp";
import { sendMessage } from "../axios/messageAxios";
import { getChatRoom } from "../axios/chatRoomAxios";
import { useDispatch, useSelector } from "react-redux";
import { getChatRoomAction } from "../action/chatRoomAction";
import { getFriendIndex } from "../getFriendIndexFunction";

const ChatRoom = () => {
  const { user } = useSelector((store) => store.user);
  const { chatRoom } = useSelector((store) => store.chatRoom);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelecteduser] = useState({});
  const [isOpen, setOpen] = useState(true);
  const [content, setContent] = useState("");

  async function getusers() {
    const { status, users } = await getAllUsers();
    if (status === true) {
      setUsers(users);
      // setSelecteduser(users[0]);
    }
  }
  async function getRooms() {
    dispatch(getChatRoomAction(user.id));
  }
  useEffect(() => {
    getusers();
    getRooms();
    if (!chatRoom) {
      return;
    }
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    const obj = {
      content: content,
      to: selectedUser.id,
      from: user.id,
    };

    await sendMessage(selectedUser.id);
  };
  return (
    <>
      <MessageBoxHeader setOpen={setOpen} open={isOpen} />
      <Divider />

      <Users />
    </>
  );
};

export default ChatRoom;
