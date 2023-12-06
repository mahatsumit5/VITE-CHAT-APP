import axios from "axios";
import { toast } from "react-toastify";
import { getNewAccessJWT } from "./userAxios";
export function getAccessJwt() {
  return sessionStorage.getItem("sessionJWT");
}
export function getRefreshJWT() {
  return localStorage.getItem("refreshJWT");
}
export const axiosProcessor = async ({
  method,
  url,
  obj,
  isPrivate,
  refreshToken,
}) => {
  const token = refreshToken ? getRefreshJWT() : getAccessJwt();
  const headers = {
    Authorization: isPrivate ? token : null,
  };
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
    });
    return data;
  } catch (error) {
    if (
      error?.response?.data?.message.includes(
        "Your session has expired. Please login Again."
      )
    ) {
      const { status, accessJWT } = await getNewAccessJWT();
      if (status === "success") {
        sessionStorage.setItem("sessionJWT", accessJWT);
        return axiosProcessor({ method, url, obj, isPrivate, refreshToken });
      }
    }

    if (error?.response?.data?.message === "jwt expired") {
      // logoutUser();
    }
  }
};
