import { toast } from "react-toastify";
import { loginUser, postUser, uploadProfileImage } from "../axios/userAxios";
import { setUser } from "../redux/userSlice";

export const loginAction = (form) => async (dispatch) => {
  const { status, user, message } = await loginUser(form);
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
