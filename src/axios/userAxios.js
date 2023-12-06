import { serverUrl } from "../constant";
import { axiosProcessor, getAccessJwt, getRefreshJWT } from "./axiosProcessor";
const userApi = serverUrl + "/api/v1/user";
export const postUser = async (userData) => {
  return axiosProcessor({
    method: "post",
    url: userApi,
    obj: userData,
  });
};

export const loginUser = async (form) => {
  return axiosProcessor({
    method: "post",
    url: `${userApi}/login-user`,
    obj: form,
  });
};

export const logoutUser = (email) => {
  return axiosProcessor({
    method: "put",
    obj: {
      accessJWT: getAccessJwt(),
      refreshJWT: getRefreshJWT(),
      email: email,
    },

    url: userApi + "/logout",
    isPrivate: true,
    refreshToken: true,
  });
};

export const getUser = async () => {
  return axiosProcessor({ method: "get", isPrivate: true, url: userApi });
};

export const getUserToResetPassword = async (email) => {
  return axiosProcessor({
    method: "get",
    url: `${userApi}/reset-password/${email}`,
  });
};

export const changePassword = async (obj) => {
  return axiosProcessor({
    method: "put",
    url: userApi + "/" + "change-password",
    obj,
  });
};

export const uploadProfileImage = async (obj) => {
  return axiosProcessor({
    method: "put",
    url: userApi,
    obj,
    isPrivate: true,
  });
};

export const getAllUsers = async (email) => {
  return axiosProcessor({
    method: "get",
    url: `${userApi}/${email}`,
    isPrivate: true,
  });
};

export const getChatRoom = async ({ from, to }) => {
  return axiosProcessor({
    method: "get",
    isPrivate: true,
    url: `${userApi}/${from}/${to}`,
  });
};
export const getNewAccessJWT = () => {
  //refreshtoken is sent to get access token
  const obj = {
    method: "get",
    url: serverUrl + "/get-refreshAccessJWT",
    isPrivate: true,
    refreshToken: true,
  };
  return axiosProcessor(obj);
};
