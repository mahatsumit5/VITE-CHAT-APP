import { io } from "socket.io-client";
export const socket =
  process.env.NODE_ENV === "development"
    ? io("http://localhost:8000")
    : io("https://messenger-j2bf.onrender.com");
socket.on("connect", () => {
  console.log("connected");
});
