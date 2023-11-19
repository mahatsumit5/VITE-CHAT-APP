import axios from "axios";
import { serverUrl } from "../constant";
export const sendMessage = async ({ to, from, content }) => {
  try {
    const { data } = await axios({
      method: "post",

      url: serverUrl + "/api/v1/message",
      data: {
        content: content,
        to: to,
        from: from,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
