import React from "react";
import Navbar from "./components/Navbar";
import "./css/style.css";
import jrone from "../../assets/img/journey-1.png";
import bmoutline from "../../assets/img/bookmark-outline.svg";

const Guest = () => {
  return (
    <>
      <Navbar />
      <div className="guest">
        <div className="jumbotron jumbotron-fluid d-flex align-items-center">
          <div className="container">
            <h1>
              The Journey <br />
              you ever dreamed of.
            </h1>
            <p className="lead">
              We made a tool so you can easily keep & share your travel
              memories.
              <br />
              But there is a lot more
            </p>
          </div>
        </div>
        <div className="content">
          <div className="content container-custom">
            <h3 className="title-content">Journey</h3>
            <div className="searching d-flex">
              <input
                type="text"
                placeholder="Find Journey"
                className="input-search"
              />
              <button className="btn-search">Search</button>
            </div>
            <div className="card-diary">
              <div className="row">
                <div className="col-md-3">
                  <div className="box">
                    <img src={jrone} alt="asset" className="img-fluid" />
                    <div className="content-box">
                      <h3 className="m-0">Bersemayam di tanah Dewata</h3>
                      <p className="date mt-1 mb-2">29 July 2020, Cipto</p>
                      <p className="description m-0">
                        Liburan di tahun baru 2020 keberangkatan saya menuju
                        Pulau Dewata Bali. Sampai lah saya malam itu di Bali
                        Airport menujukan waktu jam 02.00, dan melanjutkan
                        pejalanan yang menyenangkan..
                      </p>
                    </div>
                    <div className="icon-bookmark d-flex justify-content-center">
                      <img src={bmoutline} alt="icon-bookmark" width="18px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guest;
