import React from "react";
import { useMutation } from "react-query";
import { Link, useHistory } from "react-router-dom";
import bmoutline from "../../../assets/img/bookmark-outline.svg";
import { API } from "../../../config/api";
import swal from "sweetalert";

const CardsJourneys = ({ journey }) => {
  const history = useHistory();
  const sliceDescription = journey.description.slice(0, 190);

  function removeHTML(str) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
  }

  const handlerAddBookmark = useMutation(async (id) => {
    try {
      const config = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      };

      const response = await API().post("/bookmark/" + id, config);

      if (response.status === "success") {
        swal(
          "Success add Bookmark!",
          "bookmark added successfully!",
          "success"
        );
        history.push("/bookmark");
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
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
              __html: removeHTML(sliceDescription) + "...",
            }}
          />
        </div>
        <div
          className="icon-bookmark d-flex justify-content-center"
          onClick={() => handlerAddBookmark.mutate(journey.id)}
        >
          <img src={bmoutline} alt="icon-bookmark" width="18px" />
        </div>
      </div>
    </div>
  );
};

export default CardsJourneys;
