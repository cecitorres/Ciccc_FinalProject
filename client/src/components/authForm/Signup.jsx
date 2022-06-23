import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import {UserAuth} from '../../context/AuthContext';

const Signup = ({name, setName}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErr, setShowErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const {signUp} = UserAuth();
  

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");
    if(name !== "" && email !== "" && password !== "") {
      await signUp(email, password)
      navigate("/login");
    }else if(name === "" || email === "" || password === "") {
      setErrMsg("Please fill in the Blank");
      setShowErr(true);
    }
  }

  return (
    <div className="d-flex flex-column align-items-center">
    <Form className="d-flex flex-column justify-content-center form_container" onSubmit={handleSignupSubmit}>
      <h1 className="text-center mb-5">Sign Up</h1>
      {/* name */}
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label style={{fontSize: "1.2rem"}}>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={name} onChange={(e) => setName(e.target.value)} />
          
          {showErr && !name ? <Form.Text className="text-danger">{errMsg}</Form.Text> : ""}
          
      </Form.Group>

      {/* email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize: "1.2rem"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {showErr && !email ? <Form.Text className="text-danger">{errMsg}</Form.Text> : ""}
      </Form.Group>

      {/* password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize: "1.2rem"}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {showErr && !password ? <Form.Text className="text-danger">{errMsg}</Form.Text>: ""}
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div>
        <p className="text-center mt-5">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </Form>
  </div>
  )
}

export default Signup

