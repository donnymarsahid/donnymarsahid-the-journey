import React from "react";
import { Link } from "react-router-dom";
import bmFill from "../../../assets/img/bookmark-fill.svg";

const CardsBookmarks = ({ handlerDeleteBookmark, bookmark }) => {
  function removeHTML(str) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str.slice(0, 380);
    return tmp.textContent || tmp.innerText || "";
  }
  return (
    <div className="col-md-3">
      <div className="box">
        <img src={bookmark.journey.image} alt="asset" className="img-fluid" />
        <div className="content-box">
          <Link
            to={`/post/${bookmark.journey.id}`}
            className="text-decoration-none"
          >
            <h3 className="m-0">{bookmark.journey.title}</h3>
          </Link>
          <p className="date mt-1 mb-2">
            29 July 2020, {bookmark.journey.writer}
          </p>
          <p
            className="description m-0"
            dangerouslySetInnerHTML={{
              __html: removeHTML(bookmark.journey.description) + "...",
            }}
          />
        </div>
        <div
          className="icon-bookmark d-flex justify-content-center"
          onClick={() => handlerDeleteBookmark.mutate(bookmark.journey.id)}
        >
          <img src={bmFill} alt="icon-bookmark" width="18px" />
        </div>
      </div>
    </div>
  );
};

export default CardsBookmarks;
