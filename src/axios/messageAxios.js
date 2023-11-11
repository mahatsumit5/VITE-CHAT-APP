import axios from "axios";
export const sendMessage = async ({ to, from, content }) => {
  try {
    const { data } = await axios({
      method: "post",

      url: "http://127.0.0.1:8000/api/v1/message",
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
