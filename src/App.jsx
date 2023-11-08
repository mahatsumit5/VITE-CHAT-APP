import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </>
  );
}

export default App;
