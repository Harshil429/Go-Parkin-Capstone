import React, { Fragment, useEffect, useState } from "react";
import logo from "./img/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";
import { getUser } from "../user/helper";

const currentTab = (location, path) => {
  if (location.pathname === path) {
    return { color: "#69c6ba" };
  } else {
    return { color: "black" };
  }
};

const NavBar = () => {
  const navigate = useNavigate();

  const user = isAuthenticated();

  const location = useLocation();

  const [userName, setUserName] = useState("");

  const preload = (userId) => {
    getUser(userId)
      .then((data) => {
        setUserName(data.firstName);
      })
      .catch((err) => console.log(err, "error"));
  };

  useEffect(() => {
    if (user) {
      preload(user.user._id);
    }
  }, []);

  return (
    <>
      <div className="tm-top-bar-bg"></div>
      <div className="tm-top-bar" id="tm-top-bar">
        <div className="container">
          <div className="row w-100">
            <nav className="navbar navbar-expand-lg narbar-light">
              <a className="navbar-brand mr-auto" href="/">
                <img src={logo} alt="Site logo" />
                GoParkin
              </a>
              <button
                type="button"
                id="nav-toggle"
                className="navbar-toggler collapsed"
                data-toggle="collapse"
                data-target="#mainNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                id="mainNav"
                className="collapse navbar-collapse tm-bg-white"
              >
                <ul className="navbar-nav ml-auto">
                  {isAuthenticated() && (
                    <Fragment>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/list/booking"
                          style={currentTab(location, "/list/booking")}
                        >
                          List all booking
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/reservation"
                          style={currentTab(location, "/reservation")}
                        >
                          Make a booking
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/profile"
                          style={currentTab(location, "/profile")}
                        >
                          {userName}'s Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/contact"
                          style={currentTab(location, "/contact")}
                        >
                          Contact Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-warning signout"
                          onClick={() => {
                            signout(() => {
                              navigate("/login");
                            });
                          }}
                        >
                          Logout
                        </a>
                      </li>
                    </Fragment>
                  )}
                  {!isAuthenticated() && (
                    <Fragment>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/signup"
                          style={currentTab(location, "/signup")}
                        >
                          Signup
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="/Login"
                          style={currentTab(location, "/Login")}
                        >
                          Signin
                        </a>
                      </li>
                    </Fragment>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
