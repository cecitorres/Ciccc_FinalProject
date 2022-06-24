import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = UserAuth();

  if (!isAdmin) {
    return <Navigate to="/" />
  }
  return children;
};

export default ProtectedRoute;
