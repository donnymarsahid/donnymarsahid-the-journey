import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import leaf from "../../img/leaf.png";
import atlas from "../../img/atlas.png";
import { useHistory } from "react-router";
import { UserContext } from "../../../context/UserContext";
import { useMutation } from "react-query";
import { API } from "../../../config/api";

const Login = ({ handleShowRegister, show, handleClose }) => {
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handlerInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSubmit = useMutation(async (e) => {
    e.preventDefault();
    try {
      const body = JSON.stringify(form);
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      };
      const response = await API().post("/login", config);

      if (response.status === "success") {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.user,
        });
        history.push("/");
        window.location.reload();
      } else {
        setMessage(response.message);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="modal-access">
        <div className="modal-title">
          <h3>Login</h3>
        </div>
        {message && <p>{message}</p>}
        <img src={atlas} alt="atlas" className="img-atlas" />
        <img src={leaf} alt="leaf" className="img-leaf" />
        <form
          className="form-input-modal"
          onSubmit={(e) => handlerSubmit.mutate(e)}
        >
          <label for="email">Email</label>
          <br />
          <input type="email" name="email" onChange={handlerInput} />
          <br />
          <label for="password" className="mt-3">
            Password
          </label>
          <br />
          <input type="password" name="password" onChange={handlerInput} />
          <br />
          <button type="submit" className="btn-access mt-4">
            Login
          </button>
        </form>
        <p className="form-question">
          Don't have an account?{" "}
          <button onClick={handleShowRegister}>Click Here !</button>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
