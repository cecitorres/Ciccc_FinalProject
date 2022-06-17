import React, { Fragment } from "react";
import "../../styles/home/Service.scss";

const Service = () => {
  return (
    <Fragment>
        <h2 className="text-center mt-5">- Service -</h2>
      <div className="service_container">
        <ul className="service_content list-unstyled">
          <li>
            <img
              src="https://s7d2.scene7.com/is/image/ritzcarlton/50626994-RC_Spa_treatment01V2?$XlargeViewport100pct$"
              alt="spa"
            />
            <h4 className="pb-0 pt-3">SPA</h4>
            <p className="service_explain">
              You can book on an available day. Contact us to see available the
              day you want to book
            </p>
          </li>
          <li>
            <img
              src="http://cdn.cnn.com/cnnnext/dam/assets/170526142440-worlds-best-hotel-gyms-the-siam.jpg"
              alt="gym"
            />
            <h4 className="pb-0 pt-3">GYM</h4>
            <p className="service_explain">
              You can book on an available day. Contact us to see available the
              day you want to book
            </p>
          </li>
          <li>
            <img
              src="https://uploads.pendry.com/redesign/wp-content/uploads/sites/10/2020/09/03185438/PCHI1-REST-BAR-PENDRY-11-6540-1325x850.jpg"
              alt="restaurant"
            />
            <h4 className="pb-0 pt-3">Restaurant</h4>
            <p className="service_explain">
              You can book on an available day. Contact us to see available the
              day you want to book
            </p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Service;
