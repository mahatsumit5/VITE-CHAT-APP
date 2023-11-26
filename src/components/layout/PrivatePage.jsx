import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const PrivatePage = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  return <> {user.id ? children : <Navigate to={"/"} />}</>;
};

export default PrivatePage;
