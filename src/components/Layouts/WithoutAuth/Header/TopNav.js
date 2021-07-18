import React from "react";

const TopNav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bd-navbar">
      <div className="container">
        <div className="d-flex">
          <span className="h4 text-light">Firmconnector</span>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Privacy Policy
              </a>
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
