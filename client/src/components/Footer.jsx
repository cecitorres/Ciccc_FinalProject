import React from "react";
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div className="footer_container p-3">
      <div className="hotel_information">
          <ul className="list-unstyled d-flex sns_container">
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-facebook-f"></i></li>
            <li><i className="fab fa-instagram"></i></li>
          </ul>
          <div>
           <p>【Phone】: <strong>+16046201111</strong></p>
            <p>【Email】: <strong>info@ciccc.ca</strong></p>
            <p>
              【Address】: <strong>609 West Hastings Street, Vancouver BC, V6B 4W4, Canada</strong>
            </p>
          </div>
      </div>

      {/* copy right */}
      <p className="text-center mb-0 mt-5">All Rights Reserved &copy; Chiho & Ceci</p>
    </div>
  );
};

export default Footer;
