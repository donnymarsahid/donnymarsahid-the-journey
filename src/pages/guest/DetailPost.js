import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { API } from "../../config/api";
import moment from "moment";
import NavbarPost from "./components/NavbarPost";
import bmOutline from "../../assets/img/bookmark-outline.svg";
import loading from "../../assets/img/loading.gif";

const DetailPost = () => {
  const { id } = useParams();

  const { data: detailPost, isLoading } = useQuery(
    "detailPostCache",
    async () => {
      const response = await API().get("/journey/" + id);
      return response.data;
    }
  );

  if (isLoading) {
    return (
      <div className="custom-status">
        <img src={loading} alt="load" width="100px" />
      </div>
    );
  }

  return (
    <>
      <NavbarPost />
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
            <div className="icon-bookmark-post d-flex align-items-center justify-content-center">
              <img src={bmOutline} alt="icon" />
            </div>
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
