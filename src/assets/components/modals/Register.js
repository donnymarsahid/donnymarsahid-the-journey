import React from "react";
import { Modal, Button } from "react-bootstrap";

const Register = ({ showRegister, handleCloseRegister }) => {
  return (
    <Modal show={showRegister} onHide={handleCloseRegister} centered>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseRegister}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseRegister}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Register;
