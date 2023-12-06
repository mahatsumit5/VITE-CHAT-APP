import { toast } from "react-toastify";
import {
  getUser,
  loginUser,
  postUser,
  uploadProfileImage,
} from "../axios/userAxios";
import { setUser } from "../redux/userSlice";

export const loginAction = (form) => async (dispatch) => {
  const { status, tokens } = await loginUser(form);
  if (status === "success") {
    localStorage.setItem("refreshJWT", tokens.refreshJWT);
    sessionStorage.setItem("sessionJWT", tokens.accessJWT);
    const status = await dispatch(getUserAction());
    return status;
  }
};

export const getUserAction = () => async (dispatch) => {
  const { status, message, user } = await getUser();
  toast[status](message);
  if (status === "success") {
    dispatch(setUser(user));
  }
  return status;
};

export const uploadProfileAction = (obj) => async (dispatch) => {
  const { status, message, user } = await uploadProfileImage(obj);
  toast[status](message);
  if (status === "success") {
    dispatch(setUser(user));
  }
};

export const signUpAction = async (userData) => {
  const { status } = await postUser(userData);
  return status;
};
