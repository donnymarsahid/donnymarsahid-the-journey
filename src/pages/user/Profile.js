import React, { useState } from "react";
import { useQuery } from "react-query";
import { getDetailUser, getJourneysUser } from "../../config/api";
import CardsJourneysUser from "./cards/CardsJourneysUser";
import "./css/style.css";
import leaf from "../../assets/img/leaf.png";
import atlas from "../../assets/img/atlas.png";
import SettingProfile from "../../assets/components/modals/SettingProfile";
import noData from "../../assets/img/no-data.svg";
import { useHistory } from "react-router";

const Profile = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data: detailUser, refetch } = useQuery(
    "detailUserCache",
    getDetailUser
  );
  const { data: journeysUser } = useQuery("journeysCache", getJourneysUser);

  const cardsJourneysUser = journeysUser?.map((data) => {
    return <CardsJourneysUser journey={data} key={data.id} />;
  });

  return (
    <>
      <div className="page-profile guest">
        <div className="container-profile d-flex flex-column align-items-center">
          <div className="box-profile d-flex flex-column align-items-center">
            <h3 className="mb-3">Profile</h3>
            <img
              src={detailUser?.image}
              alt="profile"
              width="200px"
              className="img-profile-page"
            />
            <h3 className="mb-3 profile-name text-capitalize">
              {detailUser?.fullname}
            </h3>
          </div>
          <div className="box-setting-profile text-center d-flex flex-column justify-content-center">
            <img src={leaf} alt="asset" className="asset-leaf" />
            <img src={atlas} alt="asset" className="asset-atlas" />
            <p>{detailUser?.email}</p>
            <p>{detailUser?.phone}</p>
            <p>{detailUser?.address}</p>
            <button className="btn-setting" onClick={handleShow}>
              SETTING PROFILE
            </button>
          </div>
        </div>
        <div className=" user-page guest">
          <div className="content">
            <div className="content container-custom">
              <div className="card-diary">
                {journeysUser?.length === 0 ? (
                  <div className="no-data-profile flex-column d-flex justify-content-center align-items-center">
                    <img src={noData} alt="no-data" width="130px" />
                    <p className="nodatatext pt-1 pb-1 ps-3"> No Data Post !</p>
                    <button
                      className="btn-go-post ms-4"
                      onClick={() => history.push("/add-journey")}
                    >
                      go post diary
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="post-mydiary">Post My Diary</h3>
                    <div className="row">{cardsJourneysUser}</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SettingProfile show={show} handleClose={handleClose} refetch={refetch} />
    </>
  );
};

export default Profile;
