import React, { Fragment } from "react";
import "../../styles/home/GuestRoom.scss";
import { Card, Carousel, Container } from "react-bootstrap";
import guestRoom01 from "../../data/guestRoom01";
import guestRoom02 from "../../data/guestRoom02";

const GuestRoom = () => {
  return (
    <Fragment>
      <h2 className="text-center mt-5">- Guest Room -</h2>
      <Carousel>
        {/* First Slide */}
        <Carousel.Item>
          <Container className="d-flex first_carousel">
            {guestRoom01.map((room) => (
              <Card className="card" key={room.id}>
                  <Card.Img
                    variant="top"
                    src={room.image}
                    className="card_img"
                  />
                  <Card.Body>
                    <Card.Title>{room.roomType}</Card.Title>
                    <p>
                      <i className="fas fa-user"></i> Up to <strong>{room.capacity}</strong>
                    </p>
                    <Card.Text>
                      {room.description}
                    </Card.Text>
                  </Card.Body>
              </Card>
            ))}
          </Container>
        </Carousel.Item>

        {/* 2nd Slide */}
        <Carousel.Item>
          <Container className="d-flex first_carousel">
            {guestRoom02.map((room) => (
              <Card className="card" key={room.id}>
                  <Card.Img
                    variant="top"
                    src={room.image}
                    className="card_img"
                  />
                  <Card.Body>
                    <Card.Title>{room.roomType}</Card.Title>
                    <p>
                      <i className="fas fa-user"></i> Up to <strong>{room.capacity}</strong>
                    </p>
                    <Card.Text>
                      {room.description}
                    </Card.Text>
                  </Card.Body>
              </Card>
            ))}
          </Container>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default GuestRoom;
