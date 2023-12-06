import axios from "axios";
import { toast } from "react-toastify";
function getAccessJwt() {
  return sessionStorage.getItem("sessionJWT");
}
function getRefreshJWT() {
  return localStorage.getItem("refreshJWT");
}
export const axiosProcessor = async ({
  method,
  url,
  obj,
  isPrivate,
  refreshJWT,
}) => {
  const token = refreshJWT ? getRefreshJWT() : getAccessJwt();
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
      toast.error("Please login again");
      window.location.href = "/login";
    }
  }
};
