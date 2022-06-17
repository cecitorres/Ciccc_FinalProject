import React, { Fragment } from "react";
import "../../styles/home/GuestRoom.scss";
import { Button, Card, Carousel, Container } from "react-bootstrap";

const GuestRoom = () => {
  return (
    <Fragment>
      <h2 className="text-center mt-5">
        - Guest Room -
      </h2>
      <Carousel>
        <Carousel.Item>
          <Container className="d-flex first_carousel">
            <Card className="card">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                className="card_img"
              />
              <Card.Body>
                <Card.Title>Semi Double</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                className="card_img"
              />
              <Card.Body>
                <Card.Title>Queen Room</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxwcMl2H_53hVvZCrvA_Quy-cEf9-akk46g&usqp=CAU"
                className="card_img"
              />
              <Card.Body>
                <Card.Title>Twin Room</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container className="d-flex second_carousel">
            <Card className="card">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                className="card_img"
              />
              <Card.Body>
                <Card.Title>King Room</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
                className="card_img"
              />
              <Card.Body>
                <Card.Title>Family Room</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="card_img"
              />
              <Card.Body>
                <Card.Title>Premium Room</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Container>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default GuestRoom;
