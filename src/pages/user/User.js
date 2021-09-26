import React, { useState } from "react";
import "./css/style.css";
import "../guest/css/style.css";
import { useMutation, useQuery } from "react-query";
import { getJourneys } from "../../config/api";
import CardsJourneys from "./cards/CardsJourneys";
import loading from "../../assets/img/loading.gif";
import iconWriter from "../../assets/img/write-shortcut.png";
import { useHistory } from "react-router";

const User = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [searchButton, setSearchButton] = useState(false);
  let {
    data: journeys,
    isLoading,
    refetch,
  } = useQuery("journeysCache", getJourneys);

  journeys = journeys?.filter((val) => {
    if (search === "") {
      return val;
    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  });

  const handlerInputSearch = (e) => {
    setSearch(e.target.value);
    setSearchResult("search result : " + e.target.value);
    if (search === "") {
      setSearchResult("");
    }
    if (journeys.length === 0) {
      setSearchResult("journey not found!");
    }
    setSearchButton(true);
    setTimeout(() => {
      setSearchButton(false);
    }, 1000);
  };

  const cardsJourneys = journeys?.map((data) => (
    <CardsJourneys journey={data} key={data.id} refetch={refetch} />
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
      <div className=" user-page guest">
        <div className="content">
          <div className="content container-custom">
            <h3 className="title-content">Journey</h3>
            <div className="searching d-flex">
              <input
                type="text"
                placeholder="Find Journey"
                className="input-search"
                onChange={handlerInputSearch}
              />
              {searchButton ? (
                <button type="submit" className="btn-search">
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Search
                </button>
              ) : (
                <button type="submit" className="btn-search">
                  Search
                </button>
              )}
            </div>
            <p className="text-search-result">{searchResult}</p>
            <div className="card-diary">
              <div className="row">{cardsJourneys}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="add-bookmark-shortcut"
        onClick={() => history.push("/add-journey")}
      >
        <img src={iconWriter} alt="icon" />
      </div>
    </>
  );
};

export default User;
