import React from "react";
import { Link } from "react-router-dom";
import ButtonSm from "../../../Buttons/ButtonSm";
import Logo from "../../../../assets/images/Company_logo.png";

const TopNav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bd-navbar">
      <div className="container">
        <div className="d-flex">
          <Link to="/">
            <div className="logo-top">
              <img src={Logo} className="h-100 w-100" alt="Firmconnector" />
            </div>
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
              <Link className={"nav-link"} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link"} to="about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link"} to="contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link"} to="privacy-policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <div className="d-flex bd-buttons">
            <ButtonSm
              to="sign-in"
              title="Login"
              className="btn-light-custom"
              type="button"
            />
            <ButtonSm
              to="sign-up"
              title="Create Account"
              className="btn-primary-custom ms-3"
              type="button"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
