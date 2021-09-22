import React from "react";
import { Modal, Button } from "react-bootstrap";
import leaf from "../../img/leaf.png";
import atlas from "../../img/atlas.png";

const Login = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="modal-access">
        <div className="modal-title">
          <h3>Login</h3>
        </div>
        <img src={atlas} alt="atlas" className="img-atlas" />
        <img src={leaf} alt="leaf" className="img-leaf" />
        <form className="form-input-modal">
          <label for="email">Email</label>
          <br />
          <input type="email" name="email" />
          <br />
          <label for="password" className="mt-3">
            Password
          </label>
          <br />
          <input type="password" name="password" />
          <br />
          <button type="submit" className="btn-access mt-4">
            Login
          </button>
          <p className="form-question">
            Don't have an account? <button>Click Here</button>
          </p>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
