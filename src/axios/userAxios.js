import axios from "axios";

export const axiosProcessor = async ({ method, url, obj }) => {
  try {
    const data = await axios({
      method: method,
      url: url,
      data: obj,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (userData) => {
  try {
    const { data } = await axios({
      method: "post",

      url: "http://127.0.0.1:8000/api/v1/user",
      data: userData,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:8000/api/v1/user/get-user/${email}`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:8000/api/v1/user`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
