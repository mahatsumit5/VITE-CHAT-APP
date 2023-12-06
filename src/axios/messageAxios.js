import { serverUrl } from "../constant";
const messageUrl = serverUrl + "/api/v1/message";
import { axiosProcessor } from "./axiosProcessor";
export const sendMessage = ({ to, from, content }) => {
  return axiosProcessor({
    method: "post",
    isPrivate: true,
    url: messageUrl,
    obj: {
      content: content,
      to: to,
      from: from,
    },
  });
};
