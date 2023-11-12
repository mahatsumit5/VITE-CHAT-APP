import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
import Messages from "./pages/Messages";
import UserLayout from "./components/UserLayout";
import ListOfUsers from "./pages/ListOfUsers";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/chat"
          element={
            <UserLayout>
              <ChatRoom />
            </UserLayout>
          }
        />
        <Route
          path="/chat/:id"
          element={
            <UserLayout>
              <Messages />
            </UserLayout>
          }
        />
        <Route
          path="/users"
          element={
            <UserLayout>
              <ListOfUsers />
            </UserLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
