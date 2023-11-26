import axios from "axios";
import { serverUrl } from "../constant";
const url = serverUrl + "/api/v1/friend-request";
export const sendFriendRequests = async (obj) => {
  try {
    const { data } = await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      url,
      data: obj,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getFriendRequests = async (id) => {
  try {
    const { data } = await axios({
      method: "get",
      url: url + "/" + id,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSentRequests = async (id) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${url}/sent/${id}`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteFriendRequests = async (obj) => {
  try {
    const { data } = await axios({
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      data: obj,
      url,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateFriendReqStatus = async (obj) => {
  try {
    const { data } = await axios({
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      data: obj,
      url,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
