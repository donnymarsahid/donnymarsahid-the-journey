import React, { useState } from "react";
import logo from "../../../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({ handleShow, handleShowRegister }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={
          navbar
            ? `navbar fixed-top d-flex align-items-center shadow-sm active`
            : `navbar fixed-top d-flex align-items-center`
        }
      >
        <div className="container d-flex justify-content-between">
          <Link to="/">
            <img src={logo} alt="logo-the-journey" className="img-logo" />
          </Link>
          <div className="button-navbar">
            <button
              className={navbar ? `btn-login  me-3 active` : `btn-login  me-3`}
              onClick={handleShow}
            >
              Login
            </button>
            <button
              className={navbar ? `btn-register active` : `btn-register`}
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

export default Navbar;
