import axios from "axios";

export const getChatRoom = async (from) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `https://messenger-ezhi.onrender.com/api/v1/chat-room/${from}`,
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
      url: `https://messenger-ezhi.onrender.com/api/v1/chat-room/chat/${id}`,
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
      url: `https://messenger-ezhi.onrender.com/api/v1/chat-room`,
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
