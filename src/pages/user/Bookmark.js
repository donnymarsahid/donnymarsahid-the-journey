import React from "react";
import "./css/style.css";
import "../guest/css/style.css";
import { useMutation, useQuery } from "react-query";
import { API, getBookmarksUser } from "../../config/api";
import loading from "../../assets/img/loading.gif";
import noData from "../../assets/img/no-data.svg";
import CardsBookmarks from "./cards/CardsBookmarks";
import { useHistory } from "react-router";
import swal from "sweetalert";

const Bookmark = () => {
  const history = useHistory();
  const {
    data: bookmarks,
    isLoading,
    refetch,
  } = useQuery("bookmarksCache", getBookmarksUser);

  const handlerDeleteBookmark = useMutation(async (id) => {
    try {
      const config = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      };

      swal({
        title: "Are you sure?",
        text: "Bookmark will be deleted soon!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          const response = await API().delete("/bookmark/" + id, config);

          if (response.status === "success") {
            refetch();
          }
          swal("Your bookmark has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your bookmark is safe!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  const cardsBookmarks = bookmarks?.map((data) => (
    <CardsBookmarks
      bookmark={data}
      key={data.id}
      handlerDeleteBookmark={handlerDeleteBookmark}
    />
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
