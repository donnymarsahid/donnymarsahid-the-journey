import React, { useState } from "react";
import "./css/style.css";
import "../guest/css/style.css";
import { useQuery } from "react-query";
import { getBookmarksUser } from "../../config/api";
import loading from "../../assets/img/loading.gif";
import noData from "../../assets/img/no-data.svg";
import CardsBookmarks from "./cards/CardsBookmarks";
import { useHistory } from "react-router";

const Bookmark = () => {
  const history = useHistory();
  const { data: bookmarks, isLoading } = useQuery(
    "bookmarksCache",
    getBookmarksUser
  );

  const cardsBookmarks = bookmarks?.map((data) => (
    <CardsBookmarks bookmark={data} key={data.id} />
  ));

  if (isLoading) {
    return (
      <div className="custom-status">
        <img src={loading} alt="load" width="100px" />
      </div>
    );
  }

  if (bookmarks?.length === 0) {
    return (
      <div className="custom-status flex-column">
        <img src={noData} alt="load" width="250px" />
        <h4 className="ps-5 pt-2">No data Bookmark</h4>
        <button className="btn-no-bookmark" onClick={() => history.push("/")}>
          go add bookmark
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="bookmark-page user-page guest">
        <div className="content">
          <div className="content container-custom">
            <h3 className="title-content">Bookmark</h3>
            <div className="card-diary">
              <div className="row">{cardsBookmarks}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookmark;
