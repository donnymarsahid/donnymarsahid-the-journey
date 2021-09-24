import React from "react";
import { Modal } from "react-bootstrap";

const AlertSettingProfile = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>Profile has been updated!</Modal.Body>
      <Modal.Footer>
        <button className="button-check" onClick={handleClose}>
          OK
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertSettingProfile;
