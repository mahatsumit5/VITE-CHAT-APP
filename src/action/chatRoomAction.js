import {
  createChatRoom,
  getChatRoomById,
  getChatRoom,
} from "../axios/chatRoomAxios";
import { setChatRoom } from "../redux/chatRoomSlice";
import { setCurrentRoom } from "../redux/currentRoomSlice";

export const getChatRoomAction = (from) => async (dispatch) => {
  const { status, message, data } = await getChatRoom(from);
  if (status === true) {
    dispatch(setChatRoom(data));
  }
};

export const getChatRoomByIdAction = (id) => async (dispatch) => {
  const { status, message, data } = await getChatRoomById(id);
  if (status === true) {
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
