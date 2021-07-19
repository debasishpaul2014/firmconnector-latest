import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import tell_company from "../../assets/images/about_1.svg";

const AboutComponent = () => {
  return (
    <>
      <div className="container-fluid bg-info-light-custom">
        <div className="container py-5 text-center">
          <div>
            <h1 className="display-5 fw-bold">
              About <span className="text-warning">Firmconnector</span>
            </h1>
            <p>
              <span className="lead">
                Know something about us to make a good understanding.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white-custom">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-7">
              <p className="h4  fw-bold">
                So how exactly does{" "}
                <span className="text-warning">FirmConnector</span>
                <span className="text-muted"> work?</span>
              </p>
              <div className="my-3">
                <h6 className="border-bottom border-gray pb-2 mb-0">
                  Get the most from your workforce:
                </h6>
                <div className="pt-1">
                  <span className="text-sm">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success-custom"
                    />{" "}
                    Sign up
                  </span>
                </div>
                <div className="pt-1">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success-custom"
                    />{" "}
                    Create employee profiles through an automated process
                  </span>
                </div>
                <div className="pt-1">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success-custom"
                    />{" "}
                    Give employees access to manage their profiles
                  </span>
                </div>
                <div className="pt-1">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success-custom"
                    />{" "}
                    Search for skillsets and availability within your company
                  </span>
                </div>
              </div>

              <div className="my-3">
                <h6 className="border-bottom border-gray pb-2 mb-0">
                  Maximize the value of your network:
                </h6>
                <div className="pt-1">
                  <span className="text-sm">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success-custom"
                    />{" "}
                    Request FirmConnector access from your trusted vendors
                  </span>
                </div>
                <div className="pt-1">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success-custom"
                    />{" "}
                    Connect with the people you need across your network quickly
                    and easily
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card shadow-lg bg-dark text-white">
                <div className="card-image-custom-holder p-5">
                  <img src={tell_company} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-grid gap-2 d-sm-flex">
                    <button
                      type="button"
                      className="btn-custom btn-warning-custom"
                    >
                      Request a Demo
                    </button>
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

export default AboutComponent;
