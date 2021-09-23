import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./css/style.css";
import { useQuery } from "react-query";
import { getJourneys } from "../../config/api";
import CardsJourneys from "./cards/CardsJourneys";
import Login from "../../assets/components/modals/Login";
import Register from "../../assets/components/modals/Register";
import loading from "../../assets/img/loading.gif";

const Guest = () => {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseRegister = () => setShowRegister(false);

  const handleShow = () => {
    setShow(true);
    setShowRegister(false);
  };
  const handleShowRegister = () => {
    setShowRegister(true);
    setShow(false);
  };

  const { data: journeys, isLoading } = useQuery("journeysCache", getJourneys);

  const cardsJourneys = journeys?.map((data) => (
    <CardsJourneys handleShow={handleShow} journey={data} key={data.id} />
  ));

  if (isLoading) {
    return (
      <div className="custom-status">
        <img src={loading} alt="load" width="100px" />
      </div>
    );
  }

  return (
    <>
      <Navbar handleShow={handleShow} handleShowRegister={handleShowRegister} />
      <div className="guest">
        <div className="jumbotron jumbotron-fluid d-flex align-items-center">
          <div className="container">
            <h1>
              The Journey <br />
              you ever dreamed of.
            </h1>
            <p className="lead">
              We made a tool so you can easily keep & share your travel
              memories.
              <br />
              But there is a lot more
            </p>
          </div>
        </div>
        <div className="content">
          <div className="content container-custom">
            <h3 className="title-content">Journey</h3>
            <div className="searching d-flex">
              <input
                type="text"
                placeholder="Find Journey"
                className="input-search"
              />
              <button className="btn-search">Search</button>
            </div>
            <div className="card-diary">
              <div className="row">{cardsJourneys}</div>
            </div>
          </div>
        </div>
      </div>
      <Login
        handleShowRegister={handleShowRegister}
        show={show}
        handleClose={handleClose}
      />
      <Register
        handleShow={handleShow}
        showRegister={showRegister}
        handleCloseRegister={handleCloseRegister}
      />
    </>
  );
};

export default Guest;
