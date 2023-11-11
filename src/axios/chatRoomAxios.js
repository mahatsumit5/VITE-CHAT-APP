import axios from "axios";

export const getChatRoom = async (from) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/v1/chat-room/${from}`,
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
      url: `http://127.0.0.1:8000/api/v1/chat-room/chat/${id}`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
