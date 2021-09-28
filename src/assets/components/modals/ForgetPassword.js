import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import leaf from "../../img/leaf.png";
import atlas from "../../img/atlas.png";
import { useHistory } from "react-router";
import { UserContext } from "../../../context/UserContext";
import { useMutation } from "react-query";
import { API } from "../../../config/api";

const ForgetPassword = ({
  showForgetPassword,
  handleCloseForgetPassword,
  handleShow,
}) => {
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    email: "",
  });

  const { email } = form;

  const handlerInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const body = JSON.stringify(form);
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      };

      const response = await API().post("/forget-password", config);

      if (response.status === "failed") {
        setMessage(response.message);
        setTimeout(() => {
          setMessage("");
        }, 3000);
        return false;
      }

      setMessage("Check your email for reset password");
      setTimeout(() => {
        setMessage("");
      }, 3000);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Modal
      show={showForgetPassword}
      onHide={handleCloseForgetPassword}
      centered
    >
      <Modal.Body className="modal-access" style={{ paddingTop: "150px" }}>
        {message && (
          <div class="alert alert-login alert-danger" role="alert">
            {message}
          </div>
        )}
        <img src={atlas} alt="atlas" className="img-atlas" />
        <img src={leaf} alt="leaf" className="img-leaf" />
        <form
          className="form-input-modal"
          onSubmit={(e) => handlerSubmit.mutate(e)}
        >
          <input
            type="email"
            name="email"
            onChange={handlerInput}
            placeHolder="Enter your email"
          />
          <br />
          <button type="submit" className="btn-access mt-4">
            Get reset link
          </button>
          <p className="form-question-forget mt-3">
            <button onClick={handleShow}>
              {"<< "}
              Back to login
            </button>
          </p>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ForgetPassword;
