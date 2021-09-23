import React from "react";
import { useQuery } from "react-query";
import { getDetailUser } from "../../config/api";
import "./css/style.css";

const Profile = () => {
  const { data: detailUser } = useQuery("detailUserCache", getDetailUser);
  return (
    <div className="page-profile">
      <div className="container-profile">
        <div className="box-profile d-flex flex-column align-items-center">
          <h3 className="mb-3">Profile</h3>
          <img src={detailUser?.image} alt="profile" width="200px" />
          <h3 className="mb-3 profile-name text-capitalize">
            {detailUser?.fullname}
          </h3>
          <div className="detail-user-page">
            <p>{detailUser?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
