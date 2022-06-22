import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuggestMsgLogin = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: "65vh"}}>
      <Alert variant="danger">
        To book a room, please login from here.
        &nbsp;
        <Link to="/login">Login</Link>
      </Alert>
    </div>
  );
};

export default SuggestMsgLogin;
