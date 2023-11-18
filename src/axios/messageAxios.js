import axios from "axios";
export const sendMessage = async ({ to, from, content }) => {
  try {
    const { data } = await axios({
      method: "post",

      url: "https://messenger-ezhi.onrender.com/api/v1/message",
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
