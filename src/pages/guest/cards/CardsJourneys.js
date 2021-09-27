import React from "react";
import { Link } from "react-router-dom";
import bmoutline from "../../../assets/img/bookmark-outline.svg";

const CardsJourneys = ({ handleShow, journey }) => {
  function removeHTML(str) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str.slice(0, 380);
    return tmp.textContent || tmp.innerText || "";
  }

  return (
    <>
      <div className="col-md-3">
        <div className="box">
          <img src={journey.image} alt="asset" className="img-fluid" />
          <div className="content-box">
            <Link to={`/post/${journey.id}`} className="text-decoration-none">
              <h3 className="m-0">{journey.title}</h3>
            </Link>
            <p className="date mt-1 mb-2">29 July 2020, {journey.writer}</p>
            <p
              className="description m-0"
              dangerouslySetInnerHTML={{
                __html: removeHTML(journey.description) + "...",
              }}
            />
          </div>
          <div
            className="icon-bookmark d-flex justify-content-center"
            onClick={handleShow}
          >
            <img src={bmoutline} alt="icon-bookmark" width="18px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsJourneys;
