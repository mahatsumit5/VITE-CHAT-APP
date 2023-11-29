import { sendMessage } from "../axios/messageAxios";
import { socket } from "../socketIo/socket";
import { getChatRoomByIdAction } from "./chatRoomAction";

export const sendMessageAction = (obj) => async (dispatch) => {
  const { status, message, result, roomId } = await sendMessage(obj);
  if (status === true) {
    dispatch(getChatRoomByIdAction(roomId));
    return status;
  }
};
