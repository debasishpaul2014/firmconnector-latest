import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const TopNav = (props) => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const [currentPath, setCurrentPath] = useState();

  useEffect(() => {
    setCurrentPath(currentRoute);
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bd-navbar">
      <div className="container">
        <div className="d-flex">
          <Link className="nav-link active" aria-current="page" to="/">
            <span className="h4 text-light">Firmconnector</span>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mx-auto mb-2 mb-md-0 justify-content-center">
            <li className="nav-item">
              <Link
                className={currentPath == "/" ? "nav-link active" : "nav-link"}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  currentPath == "about-us" ? "nav-link active" : "nav-link"
                }
                to="about-us"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  currentPath == "contact-us" ? "nav-link active" : "nav-link"
                }
                to="contact-us"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  currentPath == "privacy-policy"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
          <div className="d-flex bd-buttons">
            <div className="btn-custom btn-light-custom" type="button">
              Login
            </div>
            <div className="btn-custom btn-primary-custom ms-3" type="button">
              Create Account
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
