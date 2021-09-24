import React from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AlertNewJourney = ({ show, handleClose }) => {
  const history = useHistory();

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>Congratulations, your diary successfully added!</Modal.Body>
      <Modal.Footer>
        <button className="button-close" onClick={handleClose}>
          Close
        </button>
        <button className="button-check" onClick={() => history.push("/")}>
          Check Now
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertNewJourney;
