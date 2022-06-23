import React from "react";
import { Link } from "react-router-dom";
import "../../styles/booking/Confirm.scss";

const Confirm = () => {
  return (
    <div className="confirm_container d-flex flex-column justify-content-center align-items-center">
      <h2>Booking Confirmed</h2>
      <img src="https://www.springhillwinery.com.au/wp-content/uploads/2019/01/confirm3.gif" alt="" />
      <p className="text-center">Thank you for your booking. <br /> We are looking forward to seeing you!</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Confirm;
