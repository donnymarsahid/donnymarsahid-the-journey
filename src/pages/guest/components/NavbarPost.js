import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.svg";

const NavbarPost = ({ handleShow, handleShowRegister }) => {
  return (
    <>
      <nav className="navbar fixed-top d-flex align-items-center shadow-sm active">
        <div className="container d-flex justify-content-between">
          <Link to="/">
            <img src={logo} alt="logo-the-journey" className="img-logo" />
          </Link>
          <div className="button-navbar">
            <button className="btn-login  me-3 active" onClick={handleShow}>
              Login
            </button>
            <button
              className="btn-register active"
              onClick={handleShowRegister}
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarPost;
