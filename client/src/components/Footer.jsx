import React from "react";
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="hotel_information">
        <div>
          <p>
            Address: 609 West Hastings Street, Vancouver BC, V6B 4W4, Canada
          </p>
          <p>Phone: +16046201111</p>
          <p>Email: info@ciccc.ca</p>
          <ul className="list-unstyled d-flex">
            <li><i className="fab fa-twitter" style={{color: "skyblue"}}></i></li>
            <li><i className="fab fa-facebook-f" style={{color: "blue"}}></i></li>
            <li><i className="fab fa-instagram" style={{color: "red"}}></i></li>
          </ul>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.541869983099!2d-123.11536158441665!3d49.2850775785221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671665ca05e5b%3A0xa6aa4200b98ef9f9!2sCornerstone%20International%20Community%20College%20of%20Canada!5e0!3m2!1sja!2sca!4v1655371930586!5m2!1sja!2sca"
            width="300"
            height="300"
            style={{ border: 0, display: "inline-block" }}
            title="googlemap"
            className="mt-2 mb-2"
          ></iframe>
        </div>
      </div>

      {/* copy right */}
      <p className="text-center">All Rights Reserved &copy; Chiho & Ceci</p>
    </div>
  );
};

export default Footer;
