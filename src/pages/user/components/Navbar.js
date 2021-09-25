import React, { useContext } from "react";
import logodark from "../../../assets/img/logo-dark.svg";
import "../css/style.css";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { getDetailUser } from "../../../config/api";
import write from "../../../assets/img/write.svg";
import user from "../../../assets/img/user.svg";
import logout from "../../../assets/img/logout.svg";
import bmOutline from "../../../assets/img/bookmark-outline.svg";
import swal from "sweetalert";
import { UserContext } from "../../../context/UserContext";

const Navbar = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const { data: detailUser } = useQuery("detailUserCache", getDetailUser);

  const handlerLogout = () => {
    swal({
      title: "Are you sure logout?",
      text: "You will be logged out of the user page",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((logout) => {
      if (logout) {
        dispatch({
          type: "LOGOUT",
        });
        localStorage.removeItem("token");
        localStorage.removeItem("idUser");
        history.push("/");
      }
    });
  };

  return (
    <>
      <nav className="navbar user-page fixed-top d-flex align-items-center shadow-sm active">
        <div className="container d-flex justify-content-between">
          <Link to="/">
            <img src={logodark} alt="logo-the-journey" className="img-logo" />
          </Link>
          <div className="button-navbar">
            <div className="dropdown">
              <img
                src={detailUser?.image}
                alt="profile"
                width="30px"
                data-bs-toggle="dropdown"
                className="img-dropdown"
              />
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="text-decoration-none" to="/profile">
                  <li className="d-flex align-items-center ps-3 pt-2 pb-2 user-icon">
                    <img src={user} alt="icon" className="pe-2" />
                    Profile
                  </li>
                </Link>
                <Link to="/add-journey" className="text-decoration-none">
                  <li className="d-flex align-items-center ps-3 pt-2 pb-2 journey-icon">
                    <img src={write} alt="icon" className="pe-2" />
                    New Journey
                  </li>
                </Link>
                <Link to="/bookmark" className="text-decoration-none">
                  <li className="d-flex align-items-center pb-2 ps-3 pt-2  bookmark-icon">
                    <img
                      src={bmOutline}
                      alt="icon"
                      width="23px"
                      className="me-3 ps-1"
                    />
                    Bookmark
                  </li>
                </Link>
                <li
                  className="d-flex align-items-center pb-2 ps-3 pt-3 logout-icon"
                  onClick={handlerLogout}
                >
                  <img src={logout} alt="icon" className="ps-1 me-2" />
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
