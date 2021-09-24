import React from "react";
import "./css/style.css";
import "../guest/css/style.css";
import { useQuery } from "react-query";
import { getJourneys } from "../../config/api";
import CardsJourneys from "./cards/CardsJourneys";
import loading from "../../assets/img/loading.gif";
import iconWriter from "../../assets/img/write-shortcut.png";
import { useHistory } from "react-router";

const User = () => {
  const { data: journeys, isLoading } = useQuery("journeysCache", getJourneys);
  const history = useHistory();

  const cardsJourneys = journeys?.map((data) => (
    <CardsJourneys journey={data} key={data.id} />
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
      <div className=" user-page guest">
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
      <div
        id="add-bookmark-shortcut"
        onClick={() => history.push("/add-journey")}
      >
        <img src={iconWriter} alt="icon" />
      </div>
    </>
  );
};

export default User;
