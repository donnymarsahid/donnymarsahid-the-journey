import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./css/style.css";
import { useQuery } from "react-query";
import { getJourneys } from "../../config/api";
import CardsJourneys from "./cards/CardsJourneys";
import Login from "../../assets/components/modals/Login";
import Register from "../../assets/components/modals/Register";
import loading from "../../assets/img/loading.gif";
import ForgetPassword from "../../assets/components/modals/ForgetPassword";

const Guest = () => {
  const [show, setShow] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleCloseForgetPassword = () => setShowForgetPassword(false);

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [searchButton, setSearchButton] = useState(false);
  let { data: journeys, isLoading } = useQuery("journeysCache", getJourneys);

  journeys = journeys?.filter((val) => {
    if (search === "") {
      return val;
    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  });

  const handlerInputSearch = (e) => {
    setSearch(e.target.value);
    setSearchResult("search result : " + e.target.value);
    if (search === "") {
      setSearchResult("");
    }
    if (journeys?.length === 0) {
      setSearchResult("journey not found!");
    }
    setSearchButton(true);
    setTimeout(() => {
      setSearchButton(false);
    }, 1000);
  };

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
                onChange={handlerInputSearch}
              />
              {searchButton ? (
                <button type="submit" className="btn-search">
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Search
                </button>
              ) : (
                <button type="submit" className="btn-search">
                  Search
                </button>
              )}
            </div>
            <p className="text-search-result">{searchResult}</p>
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

export default Guest;
