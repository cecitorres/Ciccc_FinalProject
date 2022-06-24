import React, { useState } from "react";
import "../../styles/contact/Contact.scss";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [showErr, setShowErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault("");
    setErrMsg("");
    if(name !== "" && email !== "" && comment !== "") {
      setShow(true);
      setSuccess("Thank you for your message. We will reply within 48 hours.");
    }else if(name === "" || email === "" || comment === ""){
      setErrMsg("Please fill in the blank")
      setShowErr(true);
    }
    setName("");
    setEmail("");
    setComment("");
  }


  return (
    <div className="d-flex flex-column align-items-center justify-content-center contact_container">
      {show ? <div className="success_msg"><p>{success}</p></div> : 
      <Form className="d-flex flex-column justify-content-center form_container" onSubmit={handleContactSubmit}>
      <h2 className="text-center mb-4" style={{fontSize: "2.8rem"}}>Contact</h2>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label style={{fontSize: "1.2rem"}}>*Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        {showErr && !name ? <Form.Text className="text-danger">{errMsg}</Form.Text> : ""}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize: "1.2rem"}}>*Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {showErr && !email ? <Form.Text className="text-danger">{errMsg}</Form.Text> : ""}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label style={{fontSize: "1.2rem"}}>Cell Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone#" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label style={{fontSize: "1.2rem"}}>*Comments</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="Leave your message">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          />
      </FloatingLabel>
      {showErr && !comment ? <Form.Text className="text-danger">{errMsg}</Form.Text> : ""}
      </Form.Group>

      <Button variant="primary" type="submit" className="mb-5">
        Submit
      </Button>
    </Form>}
  </div>
  );
};

export default Contact;
