import React, { Fragment, useState } from "react";
import { Button, Card } from "react-bootstrap";
import guestRoom01 from "../../data/guestRoom01";
import RoomImgModal from "./RoomImgModal";
import { useNavigate } from 'react-router-dom';
import {UserAuth} from '../../context/AuthContext';

const AvailableRoom = () => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const {user} = UserAuth();
  console.log(user);

  const handleBook = ({children}) => {
    if(!user) {
      return navigate("/suggest_login");
    }else if(user) {
      return navigate("/booking");
    }
    return children;
  }

  return (
    <Fragment>
      <div className="p-4">
        <h2 className="text-center">Available Room</h2>
        <div className="d-flex justify-content-evenly align-items-center flex-wrap mt-5">
          {guestRoom01.map((room) => (
            <Card
              style={{ width: "340px" }}
              key={room.id}
              className="mt-3 mb-3 shadow"
            >
              <Card.Img
                variant="top"
                src={room.image}
                style={{ height: "10rem" }}
                onClick={() => setModalShow(true)}
              />
              <Card.Body>
                <Card.Title>{room.roomType}</Card.Title>
                <p>
                  <i className="fas fa-user"></i> Up to{" "}
                  <strong>{room.capacity}</strong>
                </p>
                <Card.Text>{room.description}</Card.Text>
                <Button variant="primary" onClick={handleBook}>RESERVE</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <RoomImgModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

export default AvailableRoom;
