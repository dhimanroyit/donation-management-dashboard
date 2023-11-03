import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

function PrivateOutlet() {
  const { loginUser } = useAuthContext();
  return loginUser ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateOutlet;
