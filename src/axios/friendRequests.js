import axios from "axios";
import { serverUrl } from "../constant";
import { axiosProcessor } from "./axiosProcessor";
const friendRequestUrl = serverUrl + "/api/v1/friend-request";
export const sendFriendRequests = async (obj) => {
  return axiosProcessor({
    method: "post",
    isPrivate: true,
    obj,
    url: friendRequestUrl,
  });
};
export const getFriendRequests = async (id) => {
  return axiosProcessor({
    method: "get",
    isPrivate: true,
    url: `${friendRequestUrl}/${id}`,
  });
};

export const getSentRequests = async (id) => {
  return axiosProcessor({
    method: "get",
    isPrivate: true,
    url: `${friendRequestUrl}/sent/${id}`,
  });
};

export const deleteFriendRequests = async (obj) => {
  return axiosProcessor({
    method: "delete",
    url: friendRequestUrl,
    obj,
    isPrivate: true,
  });
};
export const updateFriendReqStatus = async (obj) => {
  return axiosProcessor({
    method: "put",
    isPrivate: true,
    url: friendRequestUrl,
    obj,
  });
};
