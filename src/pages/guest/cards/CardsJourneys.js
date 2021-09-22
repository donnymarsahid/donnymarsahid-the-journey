import React from "react";
import bmoutline from "../../../assets/img/bookmark-outline.svg";

const CardsJourneys = ({ journey }) => {
  return (
    <>
      <div className="col-md-3">
        <div className="box">
          <img src={journey.image} alt="asset" className="img-fluid" />
          <div className="content-box">
            <h3 className="m-0">{journey.title}</h3>
            <p className="date mt-1 mb-2">29 July 2020, {journey.writer}</p>
            <p className="description m-0">{journey.description}</p>
          </div>
          <div className="icon-bookmark d-flex justify-content-center">
            <img src={bmoutline} alt="icon-bookmark" width="18px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsJourneys;
