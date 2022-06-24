import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../../styles/booking/BookingPage.scss";
import { UserAuth } from "../../context/AuthContext";
import Confirm from "../booking/Confirm";
import axios from "axios";

const BookingPage = ({ bookingInfo }) => {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { user } = UserAuth();

  const handleBookSubmit = async () => {
    try {
      if (customerName !== "" && customerPhone !== "") {
        await axios.put(
          `http://localhost:2000/api/v1/bookings/${bookingInfo._id}`,
          {
            contact: {
              fullName: customerName,
              email: user.email,
              phoneNumber: customerPhone,
              userID: user.uid,
            },
          }
        );
        setShow(true);
      } else if (customerName === "" || customerPhone === "") {
        setErrorMsg("*Fill in the blank");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleBookSubmit();
    console.log(bookingInfo);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="booking_container d-flex flex-column justify-content-center align-items-center mb-3">
      {!show ? (
        <>
          <h2 className="mt-3 mb-5">Information</h2>
          {/*---------------------- 
            Customer Detail 
          -----------------------*/}
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
              <Form.Control
                type="username"
                placeholder="Your Name"
                onChange={(e) => setCustomerName(e.target.value)}
                value={customerName}
              />
              {errorMsg && !customerName ? (
                <p style={{ color: "red" }}>{errorMsg}</p>
              ) : (
                ""
              )}
            </FloatingLabel>
            {/* Email */}
            <p className="mb-0">Email / *Your confirmation email</p>
            <FloatingLabel controlId="floatingInput" className="mb-3">
              <strong>
                <p className="border p-3 rounded">{user.email}</p>
              </strong>
            </FloatingLabel>

            {/* Phone */}
            <p className="mb-0">*We’ll only contact you in an emergency</p>
            <FloatingLabel
              controlId="floatingInput"
              label="Cell Phone#"
              className="mb-3"
            >
              <Form.Control
                type="phone"
                placeholder="123-456-7890"
                onChange={(e) => setCustomerPhone(e.target.value)}
                value={customerPhone}
              />
              {errorMsg && !customerPhone ? (
                <p style={{ color: "red" }}>{errorMsg}</p>
              ) : (
                ""
              )}
            </FloatingLabel>
          </div>

          {/*---------------------- 
            Room Detail 
          -----------------------*/}
          <div className="step1 shadow-lg mt-3">
            <h4 className="border-bottom pb-2 mb-3">Step2: Room Detail</h4>
            <p>
              Room Type: <strong>{bookingInfo.roomType}</strong>
            </p>
            <img
              src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
              alt="room"
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              Number of People:{" "}
              <strong>
                {bookingInfo.guests.adults + bookingInfo.guests.children}
              </strong>
            </p>
            <p>
              Check-in:{" "}
              <strong>
                {bookingInfo.startDate.substring(0, 10)} (3:00 PM)
              </strong>
            </p>
            <p>
              Check-out:{" "}
              <strong>{bookingInfo.endDate.substring(0, 10)} (noon)</strong>
            </p>
            <p>
              Pre-tax:{" "}
              <strong style={{ fontSize: "1.2rem" }}>
                {bookingInfo.preTaxPrice} CAD
              </strong>
            </p>
            <p>
              Tax:{" "}
              <strong style={{ fontSize: "1.2rem" }}>
                {bookingInfo.tax} CAD
              </strong>
            </p>
            <p>
              Total Price:{" "}
              <strong style={{ fontSize: "1.5rem" }}>
                {bookingInfo.totalPrice} CAD
              </strong>
            </p>

            <Button
              id="checkout-and-portal-button"
              type="submit"
              onClick={handleBookSubmit}
            >
              BOOK
            </Button>
          </div>
        </>
      ) : (
        <Confirm />
      )}
    </div>
  );
};

export default BookingPage;
