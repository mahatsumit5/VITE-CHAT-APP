import axios from "axios";
import { serverUrl } from "../constant";

export const getChatRoom = async (from) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${serverUrl}/api/v1/chat-room/${from}`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getChatRoomById = async (id) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${serverUrl}/api/v1/chat-room/chat/${id}`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createChatRoom = async (obj) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${serverUrl}/api/v1/chat-room`,
      headers: {
        "Content-Type": "application/json",
      },
      data: obj,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteChatRoom = async (id, obj) => {
  try {
    const { data } = await axios({
      method: "delete",
      url: `${serverUrl}/api/v1/chat-room/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: obj,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
