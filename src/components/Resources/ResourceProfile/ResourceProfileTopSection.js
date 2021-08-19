import React from "react";
import ProfileImageLg from "../../CommonComponent/ProfileImageLg";
import user5 from "../../../assets/images/user5.jpg";
import IconContainer from "../../Iconcontainer/IconContainer";

import "./profile.css";

const ResourceProfileTopSection = () => {
  return (
    <div className="row">
      <div
        className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 d-flex flex-column align-items-center"
        style={{ height: "20rem" }}
      >
        <div className="card-custom w-100">
          <div className="card-body">
            <div className="d-flex">
              <div className="col-12 col-lg-5 col-xl-5 col-xxl-5 border-end d-flex flex-column">
                <div className="d-flex justify-content-center">
                  <div className="profile-img-lg">
                    <ProfileImageLg imgSrc={user5} />
                  </div>
                </div>

                <div className="d-flex flex-column mt-4 mb-2 justify-content-center align-items-center">
                  <div className="d-block">
                    <span className="h5 fw-bold-custom">Malina Weissman</span>
                  </div>
                  <div className="d-block">
                    <span className="text-x-sm-custom text-muted-custom">
                      Senior Consultant
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column mt-2 justify-content-center align-items-center">
                  <div className="d-block">
                    <span className="text-x-x-sm-custom fw-bold">
                      Profile Highlights
                    </span>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 border-end d-flex flex-column justify-content-center align-items-center">
                    <div className="d-block">
                      <span className="fw-bold-custom h3">5</span>
                    </div>
                    <div className="d-block">
                      <span className="text-x-sm-custom text-muted-custom">
                        Years
                      </span>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex flex-column justify-content-center align-items-center">
                    <div className="d-block">
                      <span className="fw-bold-custom h3">14</span>
                    </div>
                    <div className="d-block">
                      <span className="text-x-sm-custom text-muted-custom">
                        Projects
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-2"></div>
              </div>
              <div className="col-12 col-lg-7 col-xl-7 col-xxl-7 px-4 d-flex flex-column justify-content-between">
                <div className="row">
                  <div className="col-6">
                    <div className="d-block">
                      <span className="text-x-sm-custom text-muted-custom">
                        Gender
                      </span>
                    </div>
                    <div className="d-block border-bottom pb-2">
                      <span className="text-x-x-sm-custom fw-bold">Female</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-block">
                      <span className="text-x-x-sm-custom text-muted-custom">
                        Birthday
                      </span>
                    </div>
                    <div className="d-block border-bottom pb-2">
                      <span className="text-x-x-sm-custom fw-bold">
                        24.09.1989
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-block">
                      <span className="text-x-x-sm-custom text-muted-custom">
                        Phone Number
                      </span>
                    </div>
                    <div className="d-block border-bottom pb-2">
                      <span className="text-x-x-sm-custom fw-bold">
                        +1 23569855996
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-block">
                      <span className="text-x-x-sm-custom text-muted-custom">
                        Address
                      </span>
                    </div>
                    <div className="d-block border-bottom pb-2">
                      <span className="text-x-x-sm-custom fw-bold">
                        St. John Road, 31
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-block">
                      <span className="text-x-x-sm-custom text-muted-custom">
                        City
                      </span>
                    </div>
                    <div className="d-block border-bottom pb-2">
                      <span className="text-x-x-sm-custom fw-bold">
                        Kolkata
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-block">
                      <span className="text-x-x-sm-custom text-muted-custom">
                        Zip Code
                      </span>
                    </div>
                    <div className="d-block border-bottom pb-2">
                      <span className="text-x-x-sm-custom fw-bold">700133</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-block">
                      <span className="text-x-x-sm-custom text-muted-custom">
                        Registration Date
                      </span>
                    </div>
                    <div className="d-block pb-2">
                      <span className="text-x-x-sm-custom fw-bold">
                        12.03.2021
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-block">
                      <span className="text-x-x-sm-custom text-muted-custom">
                        Membership Status
                      </span>
                    </div>
                    <div className="d-block pb-2">
                      <span className="text-x-x-sm-custom fw-bold text-success-custom fw-bolder">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-3"
        style={{ height: "20rem" }}
      >
        <div className="card-custom h-100 overflow-hidden">
          <div className="card-body ">
            <div className="d-block mb-3">
              <span className="text-sm-custom fw-bold-custom">Notes</span>
            </div>
            <div className="card-custom">
              <div className="card-body bg-muted-custom">
                <div className="d-block">
                  <p className="text-x-x-sm-custom">
                    The “About” section of any personal website can be a slog. A
                    drain. A hassle.
                  </p>
                  <p className="text-x-x-sm-custom">
                    You’ve already created a whole website about yourself, so it
                    can be difficult to muster the strength to write that final
                    description of who you are and what you’re about. But never
                    fear!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-3"
        style={{ height: "20rem" }}
      >
        <div className="card-custom h-100">
          <div className="card-body ">
            <div className="d-block mb-3">
              <span className="text-sm-custom fw-bold-custom">
                Files / Documents
              </span>
            </div>
            <div className="d-flex shadow-sm rounded p-2 mb-2">
              <IconContainer iconName={"FiFileText"} color="var(--info)" />
              <div className="d-block ms-2">
                <span className="text-x-x-sm-custom fw-medium-custom text-muted">
                  Job Resume.pdf
                </span>
              </div>
            </div>
            <div className="d-flex shadow-sm rounded p-2 mb-2">
              <IconContainer iconName={"FiFileText"} color="var(--muted)" />
              <div className="d-block ms-2">
                <span className="text-x-x-sm-custom fw-medium-custom text-muted">
                  Oracel Certificate.pdf
                </span>
              </div>
            </div>
            <div className="d-flex shadow-sm rounded p-2 mb-2">
              <IconContainer iconName={"FiFileText"} color="var(--muted)" />
              <div className="d-block ms-2">
                <span className="text-x-x-sm-custom fw-medium-custom text-muted">
                  SAP Certification.pdf
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceProfileTopSection;
