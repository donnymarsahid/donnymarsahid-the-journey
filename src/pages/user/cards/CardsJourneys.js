import React from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useHistory } from "react-router-dom";
import bmoutline from "../../../assets/img/bookmark-outline.svg";
import { API, getDetailUser } from "../../../config/api";
import swal from "sweetalert";
import bmFill from "../../../assets/img/bookmark-fill.svg";
import moment from "moment";

const CardsJourneys = ({ journey, refetch }) => {
  const history = useHistory();
  const sliceDescription = journey.description.slice(0, 190);
  const { data: detailUser } = useQuery("detailUserCache", getDetailUser);

  function removeHTML(str) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
  }

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

  const findBookmark = journey?.bookmarks?.filter(
    (data) => data.idUser === detailUser?.id
  );

  return (
    <div className="col-md-3">
      <div className="box">
        <img src={journey.image} alt="asset" className="img-fluid" />
        <div className="content-box">
          <Link to={`/post/${journey.id}`} className="text-decoration-none">
            <h3 className="m-0">{journey.title}</h3>
          </Link>
          <p className="date mt-1 mb-2">
            {moment(journey.createdAt).format("LL")}, {journey.writer}
          </p>
          <p
            className="description m-0"
            dangerouslySetInnerHTML={{
              __html: removeHTML(sliceDescription) + "...",
            }}
          />
        </div>
        {journey?.bookmarks?.length === 0 ||
        findBookmark[0]?.idUser !== detailUser?.id ? (
          <div
            className="icon-bookmark d-flex justify-content-center"
            onClick={() => handlerAddBookmark.mutate(journey.id)}
          >
            <img src={bmoutline} alt="icon-bookmark" width="18px" />
          </div>
        ) : (
          <div
            className="icon-bookmark d-flex justify-content-center"
            onClick={() => handlerDeleteBookmark.mutate(journey.id)}
          >
            <img src={bmFill} alt="icon-bookmark" width="18px" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsJourneys;
