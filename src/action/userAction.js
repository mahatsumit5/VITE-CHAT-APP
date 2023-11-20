import { toast } from "react-toastify";
import { loginUser, postUser } from "../axios/userAxios";
import { setUser } from "../redux/userSlice";

export const loginAction = (form) => async (dispatch) => {
  const { status, user, message } = await loginUser(form);
  toast[status](message);
  if (status === "success") {
    dispatch(setUser(user));
  }
  return status;
};

export const signUpAction = async (userData) => {
  const { status } = await postUser(userData);
  return status;
};
