import React, { Fragment } from "react";
import { Button, Modal } from "react-bootstrap";
import guestRoom02 from "../../data/guestRoom02";

const RoomImgModal = (props) => {
  return (
    <Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Room Gallery
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-wrap justify-content-evenly">
          {guestRoom02.map((room) => (
            <div key={room.id} className="p-3"> 
              <img
                src={room.image}
                alt="gallery"
                style={{ width: "300px", height: "300px", borderRadius: "6px"}}
                className="shadow-lg"
              />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default RoomImgModal;
