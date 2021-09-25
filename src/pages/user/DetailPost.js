import React from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router";
import { API, getDetailUser } from "../../config/api";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import bmOutline from "../../assets/img/bookmark-outline.svg";
import bmFill from "../../assets/img/bookmark-fill.svg";
import loading from "../../assets/img/loading.gif";
import iconEdit from "../../assets/img/icon-edit.svg";
import iconDelete from "../../assets/img/icon-delete.svg";
import swal from "sweetalert";

const DetailPost = () => {
  const { id } = useParams();
  const history = useHistory();

  const { data: detailUser } = useQuery("detailUserCache", getDetailUser);
  const {
    data: detailPost,
    isLoading,
    refetch,
  } = useQuery("detailPostCache", async () => {
    const response = await API().get("/journey/" + id);
    return response.data;
  });

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

  const handlerDeletePost = useMutation(async () => {
    try {
      const config = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      };

      swal({
        title: "Are you sure?",
        text: "Your travel log will be deleted!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          const response = await API().delete(
            "/journey/" + detailPost?.id,
            config
          );
          console.log(response);

          if (response.status === "success") {
            history.push("/");
          }
          swal("Your travel log has been successfully deleted!", {
            icon: "success",
          });
        } else {
          swal("Your notes are safe!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  if (isLoading) {
    return (
      <div className="custom-status">
        <img src={loading} alt="load" width="100px" />
      </div>
    );
  }

  const findBookmark = detailPost?.bookmarks.filter(
    (data) => data.idUser === detailUser?.id
  );

  return (
    <>
      {detailPost?.idUser === detailUser?.id ||
      findBookmark[0]?.idUser !== detailUser?.idUser ? (
        <>
          <Link to={`/update-journey/${detailPost?.id}`}>
            <div className="btn-update-page-detail d-flex align-items-center justify-content-center">
              <img src={iconEdit} alt="icon" width="25px" />
            </div>
          </Link>
          <div
            className="btn-delete-page-detail d-flex align-items-center justify-content-center"
            onClick={() => handlerDeletePost.mutate()}
          >
            <img src={iconDelete} alt="icon" width="25px" />
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="detail-post">
        <div className="container-post">
          <div className="title-post d-flex justify-content-between">
            <div className="title-date">
              <h3>{detailPost?.title}</h3>
              <p className="m-0">
                {moment(detailPost?.createdAt).format("LL")},{"  "}
                {detailPost?.writer}
              </p>
            </div>
            {detailPost?.bookmarks.length === 0 ||
            findBookmark[0]?.idUser !== detailUser?.id ? (
              <div
                className="icon-bookmark-post d-flex align-items-center justify-content-center"
                onClick={() => handlerAddBookmark.mutate(detailPost?.id)}
              >
                <img src={bmOutline} alt="icon" />
              </div>
            ) : (
              <>
                <div
                  className="icon-bookmark-post d-flex align-items-center justify-content-center"
                  onClick={() => handlerDeleteBookmark.mutate(detailPost?.id)}
                >
                  <img src={bmFill} alt="icon" />
                </div>
              </>
            )}
          </div>
          <div className="image-post d-flex justify-content-center">
            <img src={detailPost?.image} alt="img-post" className="img-post" />
          </div>
          <div
            className="description-post mt-5"
            dangerouslySetInnerHTML={{ __html: detailPost?.description }}
          />
        </div>
      </div>
    </>
  );
};

export default DetailPost;
