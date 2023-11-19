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
import PrivatePage from "./components/PrivatePage";
import { connectSocket } from "./socketIo/socket";

function App() {
  connectSocket();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivatePage>
              <UserLayout>
                <ChatRoom />
              </UserLayout>
            </PrivatePage>
          }
        />
        <Route
          path="/chat/:id"
          element={
            <PrivatePage>
              <UserLayout>
                <Messages />
              </UserLayout>
            </PrivatePage>
          }
        />
        <Route
          path="/chat/users"
          element={
            <PrivatePage>
              <UserLayout>
                <ListOfUsers />
              </UserLayout>
            </PrivatePage>
          }
        />
      </Routes>
    </>
  );
}

export default App;
