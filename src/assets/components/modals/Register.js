import React from "react";
import { Modal, Button } from "react-bootstrap";
import leaf from "../../img/leaf.png";
import atlas from "../../img/atlas.png";

const Register = ({ showRegister, handleCloseRegister }) => {
  return (
    <Modal show={showRegister} onHide={handleCloseRegister} centered>
      <Modal.Body className="modal-access register">
        <div className="modal-title">
          <h3>Register</h3>
        </div>
        <img src={atlas} alt="atlas" className="img-atlas" />
        <img src={leaf} alt="leaf" className="img-leaf register" />
        <form className="form-input-modal register">
          <label for="fullname">Fullname</label>
          <br />
          <input type="fullname" name="fullname" />
          <br />
          <label for="email" className="mt-2">
            Email
          </label>
          <br />
          <input type="email" name="email" />
          <br />
          <label for="password" className="mt-2">
            Password
          </label>
          <br />
          <input type="password" name="password" />
          <br />
          <label for="phone" className="mt-2">
            Phone
          </label>
          <br />
          <input type="number" name="phone" />
          <br />
          <label for="address" className="mt-2">
            Address
          </label>
          <br />
          <textarea name="address" className="input-textarea" />
          <br />
          <button type="submit" className="btn-access register">
            Register
          </button>
          <p className="form-question register">
            You have account? <button>Login Here</button>
          </p>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
