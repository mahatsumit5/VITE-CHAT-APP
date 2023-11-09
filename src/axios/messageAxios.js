import axios from "axios";
export const sendMessage = async (id) => {
  try {
    const { data } = await axios({
      method: "post",

      url: "http://127.0.0.1:8000/api/v1/message",
      data: {
        content: "content",
        to: id,
        from: localStorage.getItem("user"),
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
