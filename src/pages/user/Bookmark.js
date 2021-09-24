import React, { useState } from "react";
import "./css/style.css";
import "../guest/css/style.css";
import { useQuery } from "react-query";
import { getBookmarksUser } from "../../config/api";
import loading from "../../assets/img/loading.gif";
import CardsBookmarks from "./cards/CardsBookmarks";

const Bookmark = () => {
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
