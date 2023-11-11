import { getChatRoom, getChatRoomById } from "../axios/chatRoomAxios";
import { setChatRoom } from "../redux/chatRoomSlice";
import { setCurrentRoom } from "../redux/currentRoomSlice";

export const getChatRoomAction = (from) => async (dispatch) => {
  console.log(from);
  const { status, message, data } = await getChatRoom(from);
  dispatch(setChatRoom(data));
};

export const getChatRoomByIdAction = (id) => async (dispatch) => {
  const { status, message, data } = await getChatRoomById(id);
  if (status === true) {
    dispatch(setCurrentRoom(data));
  }
};
