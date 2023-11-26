import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Main from "./pages/Main";

import PrivatePage from "./components/layout/PrivatePage";
import ForgotPassword from "./pages/ForgotPassword";
import UserLayout from "./components/layout/UserLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route
          path="/chat"
          element={
            <PrivatePage>
              <UserLayout>
                <Main />
              </UserLayout>
            </PrivatePage>
          }
        />
      </Routes>
    </>
  );
}

export default App;
