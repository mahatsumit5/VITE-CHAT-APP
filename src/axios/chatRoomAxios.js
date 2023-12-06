import axios from "axios";
import { serverUrl } from "../constant";
import { axiosProcessor } from "./axiosProcessor";
const chatRoomApi = `${serverUrl}/api/v1/chat-room`;
export const getChatRoom = (from) => {
  const obj = {
    method: "get",
    url: `${chatRoomApi}/${from}`,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const getChatRoomById = (id) => {
  const obj = {
    method: "get",
    url: `${chatRoomApi}/chat/${id}`,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const createChatRoom = async (data) => {
  const obj = {
    method: "post",
    url: chatRoomApi,
    isPrivate: true,
    obj: data,
  };
  return axiosProcessor(obj);
};

export const deleteChatRoom = async (id) => {
  return axiosProcessor({
    method: "delete",
    url: `${chatRoomApi}/${id}`,
    isPrivate: true,
  });
};
