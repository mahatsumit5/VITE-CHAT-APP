import axios from "axios";
import { serverUrl } from "../constant";

export const axiosProcessor = async ({ method, url, obj }) => {
  try {
    const data = await axios({
      method: method,
      url: url,
      data: obj,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (userData) => {
  try {
    const { data } = await axios({
      method: "post",

      url: serverUrl + "/api/v1/user",
      data: userData,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByEmail = async (form) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${serverUrl}/api/v1/user/login-user`,
      data: form,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (email) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${serverUrl}/api/v1/user/${email}`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getChatRoom = async ({ from, to }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${serverUrl}/api/v1/chat-room/${from}/${to}`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
