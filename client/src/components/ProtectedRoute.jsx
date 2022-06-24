import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user.email !== "mokochii1108@gmail.com") {
    return <Navigate to="/" />
  }
  return children;
};

export default ProtectedRoute;
