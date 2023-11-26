import {
  deleteFriendRequests,
  getFriendRequests,
  getSentRequests,
  sendFriendRequests,
  updateFriendReqStatus,
} from "../axios/friendRequests";
import { toast } from "react-toastify";
import { setFriendReq, setSentReq } from "../redux/friendRequests";
import { addNewFriendAction } from "./chatRoomAction";
export const getFriendReqAction = (id) => async (dispatch) => {
  const { status, message, friendRequests } = await getFriendRequests(id);
  if (status === "success" || message === "No friend requests found") {
    dispatch(setFriendReq(friendRequests));
  }
};
export const getSentReqAction = (id) => async (dispatch) => {
  const { status, message, friendRequests } = await getSentRequests(id);
  if (status === "success") {
    dispatch(setSentReq(friendRequests));
  }
  if (status === "error" && message === "No friend requets sent") {
    dispatch(setSentReq(friendRequests));
  }
};

export const sendFriendRequestsAction = (obj) => async (dispatch) => {
  const { status, message } = await sendFriendRequests(obj);
  if (status === "success") {
    dispatch(getSentReqAction(obj.from));
  }
};

export const deleteFriendReqAction = (obj) => async (dispatch) => {
  const { status, message } = await deleteFriendRequests(obj);
  if (status === "success") {
    dispatch(getSentReqAction(obj.from));
  }
};

export const updateReqStatusAction = (obj) => async (dispatch) => {
  const { status, message, result } = await updateFriendReqStatus(obj);
  toast[status](message);
  if (status === "success") {
    dispatch(getFriendReqAction(obj.to));
    dispatch(deleteFriendReqAction(obj));
  }
  if (result?.status === "ACCEPTED") {
    dispatch(addNewFriendAction(obj));
  }
};
