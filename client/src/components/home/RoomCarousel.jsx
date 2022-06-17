import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/home/RoomCarousel.scss";
import roomCarousel from "../../data/roomCarousel";

const RoomCarousel = () => {
  return (
    <Fragment>
      <Carousel fade className="roomcarousel_container">
        {roomCarousel.map((carousel) => (
          <Carousel.Item key={carousel.id}>
            <img
              className="d-block w-100"
              src={carousel.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{carousel.title}</h3>
              <p>{carousel.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Fragment>
  );
};

export default RoomCarousel;
