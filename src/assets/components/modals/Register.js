import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import leaf from "../../img/leaf.png";
import atlas from "../../img/atlas.png";
import { useMutation } from "react-query";
import { API } from "../../../config/api";

const Register = ({ handleShow, showRegister, handleCloseRegister }) => {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const { fullname, email, password, phone, address } = form;

  const handlerInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      if (
        fullname === "" ||
        email === "" ||
        password === "" ||
        phone === "" ||
        address === ""
      ) {
        setMessage("Please enter registration data !");
        setTimeout(() => {
          setMessage("");
        }, 3000);
        return false;
      }
      const body = JSON.stringify(form);

      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      };

      const response = await API().post("/register", config);
      if (response.status === "success") {
        setMessage("success register please login");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } else if (response.error.message) {
        setMessage(response.error.message);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Modal show={showRegister} onHide={handleCloseRegister} centered>
      <Modal.Body className="modal-access register">
        <div className="modal-title">
          <h3>Register</h3>
          {message && (
            <div class="alert alert-login alert-danger" role="alert">
              {message}
            </div>
          )}
        </div>
        <img src={atlas} alt="atlas" className="img-atlas" />
        <img src={leaf} alt="leaf" className="img-leaf register" />
        <form
          className="form-input-modal register"
          onSubmit={(e) => handlerSubmit.mutate(e)}
        >
          <label for="fullname">Fullname</label>
          <br />
          <input type="text" name="fullname" onChange={handlerInput} />
          <br />
          <label for="email" className="mt-2">
            Email
          </label>
          <br />
          <input type="email" name="email" onChange={handlerInput} />
          <br />
          <label for="password" className="mt-2">
            Password
          </label>
          <br />
          <input type="password" name="password" onChange={handlerInput} />
          <br />
          <label for="phone" className="mt-2">
            Phone
          </label>
          <br />
          <input type="number" name="phone" onChange={handlerInput} />
          <br />
          <label for="address" className="mt-2">
            Address
          </label>
          <br />
          <textarea
            name="address"
            className="input-textarea"
            onChange={handlerInput}
          />
          <br />
          <button type="submit" className="btn-access register">
            Register
          </button>
        </form>
        <p className="form-question register">
          You have account? <button onClick={handleShow}>Login Here !</button>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
