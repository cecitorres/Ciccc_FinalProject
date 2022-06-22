import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../../styles/booking/BookingPage.scss";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../../context/AuthContext";


const BookingPage = () => {
  const navigate = useNavigate();
  const {user} = UserAuth();

  const handleBookSubmit = (e) => {
    e.preventDefault();
    navigate("/payment")
  }

  return (
    <div className="booking_container d-flex flex-column justify-content-center align-items-center mb-3">
      <h2 className="mt-3 mb-5">Vancouver Hotel</h2>

      {/* Customer Detail */}
      <div className="step1 shadow-lg">
        <h4 className="border-bottom pb-2 mb-3">Step1: Your Detail</h4>
        {/* Name */}
        <p className="mb-0">
          *Please give us the name of one of the people staying in this room
        </p>
        <FloatingLabel
          controlId="floatingPassword"
          label="Your Full Name"
          className="mb-3"
        >
          <Form.Control type="username" placeholder="Your Name" />
        </FloatingLabel>

        {/* Email */}
        <p className="mb-0">Email / *Your confirmation email goes here</p>
        <FloatingLabel
          controlId="floatingInput"
          className="mb-3"
        >
          <strong><p className="border p-3 rounded">{user.email}</p></strong>
        </FloatingLabel>

        {/* Phone */}
        <p className="mb-0">*We’ll only contact you in an emergency</p>
        <FloatingLabel
          controlId="floatingInput"
          label="Cell Phone#"
          className="mb-3"
        >
          <Form.Control type="phone" placeholder="123-456-7890" />
        </FloatingLabel>
      </div>

      {/* Room Detail */}
      <div className="step1 shadow-lg mt-3">
        <h4 className="border-bottom pb-2 mb-3">Step2: Room Detail</h4>
          <p>Room Type: <strong>King Room</strong></p>
          <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="room" style={{width: "100px", height: "100px"}} />
          <p>Number of People: <strong>2</strong></p>
          <p>Check-in: <strong>Monday, July 4, 2022 (3:00 PM)</strong></p>
          <p>Check-out: <strong>Tuesday, July 11, 2022 (noon)</strong></p>
          <p>Pre-tax: <strong style={{fontSize: "1.2rem"}}>450.00 CAD</strong></p>
          <p>Tax: <strong style={{fontSize: "1.2rem"}}>54.43 CAD</strong></p>
          <p>Total Price: <strong style={{fontSize: "1.5rem"}}>504.43 CAD</strong></p>

          {/* stripe */}
          <form action="/create-checkout-session" method="POST" onSubmit={handleBookSubmit}>
            <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
            <Button id="checkout-and-portal-button" type="submit">BOOK</Button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
