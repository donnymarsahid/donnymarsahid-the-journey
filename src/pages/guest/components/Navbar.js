import React, { useState } from "react";
import logo from "../../../assets/img/logo.svg";

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
          <img src={logo} alt="logo-the-journey" className="img-logo" />
          <div className="button-navbar">
            <button className="btn-login  me-3" onClick={handleShow}>
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
