import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import '../../styles/home/RoomCarousel.scss';

const RoomCarousel = () => {
  return (
    <Fragment>
      <Carousel fade className="roomcarousel_container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://stayflexi.com/ROOT.war/media/user_12404/GrandVelas.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://casinossale.com/wp-content/uploads/2019/08/ad34ad8485eb2eb9fce806826b65375d.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default RoomCarousel;
