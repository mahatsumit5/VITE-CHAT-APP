import { toast } from "react-toastify";
import { getUserByEmail, postUser } from "../axios/userAxios";
import { setUser } from "../redux/userSlice";

export const loginAction = (email) => async (dispatch) => {
  const { status, user } = await getUserByEmail(email);
  toast(status);
  if (status === true) {
    dispatch(setUser(user));
  }
  return status;
};

export const signUpAction = async (userData) => {
  const { status } = await postUser(userData);
  return status;
};
