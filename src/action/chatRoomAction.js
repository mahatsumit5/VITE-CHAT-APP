import {
  createChatRoom,
  getChatRoomById,
  getChatRoom,
  deleteChatRoom,
} from "../axios/chatRoomAxios";
import { setChatRoom } from "../redux/chatRoomSlice";
import { setCurrentRoom } from "../redux/currentRoomSlice";
import { toast } from "react-toastify";
export const getChatRoomAction = (from) => async (dispatch) => {
  const { status, message, data } = await getChatRoom(from);
  if (status === true) {
    dispatch(setChatRoom(data));
  }
};

export const getChatRoomByIdAction = (id) => async (dispatch) => {
  const { status, message, data } = await getChatRoomById(id);

  if (status === "success") {
    dispatch(setCurrentRoom(data));
    return data;
  }
};
export const addNewFriendAction = (obj) => async (dispatch) => {
  const { status, message, data } = await createChatRoom(obj);
  if (status === true) {
    dispatch(getChatRoomAction(obj.from));
  }
};

export const deleteChatRoomAction = (id, obj) => async (dispatch) => {
  const { status, message } = await deleteChatRoom(id, obj);
  toast[status](message);
  if (status === "success") {
  }
};
