import React, { useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router";
import NavbarPost from "./components/NavbarPost";
import leaf from "../../assets/img/leaf.png";
import atlas from "../../assets/img/atlas.png";
import { API } from "../../config/api";
import Login from "../../assets/components/modals/Login";
import Register from "../../assets/components/modals/Register";
import ForgetPassword from "../../assets/components/modals/ForgetPassword";

const ResetPassword = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleCloseForgetPassword = () => setShowForgetPassword(false);

  const handleShow = () => {
    setShow(true);
    setShowRegister(false);
    setShowForgetPassword(false);
  };
  const handleShowRegister = () => {
    setShowRegister(true);
    setShow(false);
  };
  const handleShowForgetPassword = () => {
    setShowForgetPassword(true);
    setShow(false);
  };

  const { password, confirmPassword } = form;

  const handlerInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      if (password !== confirmPassword) {
        setMessage("password does match");
        setTimeout(() => {
          setMessage("");
        }, 3000);
        return false;
      }

      const dataPassword = JSON.stringify({ password: password });
      const config = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: dataPassword,
      };
      const response = await API().put("/reset-password/" + id, config);

      if (response.status === "success") {
        setMessage("Password changed successfully, please login");
      }
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <>
      <NavbarPost
        handleShow={handleShow}
        handleShowRegister={handleShowRegister}
      />
      <div className="page-reset-password d-flex justify-content-center align-items-center flex-column">
        <form
          onSubmit={(e) => handlerSubmit.mutate(e)}
          className="box-reset-password"
        >
          {" "}
          <img src={leaf} alt="asset" className="leaf-reset-pass" />
          <img src={atlas} alt="asset" className="atlas-reset-pass" />
          {message && (
            <div class="alert alert-danger mb-1 p-2" role="alert">
              {message}
            </div>
          )}
          <label for="password">New Password</label>
          <br />
          <input
            type="password"
            name="password"
            onChange={handlerInput}
            required
          />
          <br />
          <label for="confirmNewPassword" className="mt-2">
            Confirm New Password
          </label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            onChange={handlerInput}
            required
          />
          <br />
          <button type="submit" className="btn-reset-password">
            Save Change
          </button>
        </form>
      </div>
      <Login
        handleShowRegister={handleShowRegister}
        show={show}
        handleClose={handleClose}
        handleShowForgetPassword={handleShowForgetPassword}
      />
      <Register
        handleShow={handleShow}
        showRegister={showRegister}
        handleCloseRegister={handleCloseRegister}
      />
      <ForgetPassword
        showForgetPassword={showForgetPassword}
        handleCloseForgetPassword={handleCloseForgetPassword}
        handleShow={handleShow}
      />
    </>
  );
};

export default ResetPassword;
