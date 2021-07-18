import React from "react";

import banner_image from "../../assets/images/banner_left.svg";

const TopBannerComponent = () => {
  return (
    <div className="jumbotron bg-info bg-gradient">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1 className="h1 text-white">
              Maximize the value of your network
            </h1>
            <p className=" text-dark">
              FirmConnector is software as a service that can provide your
              organization with quick, easy access to the skillsets and
              availability of your entire talent network both your in-house
              workforce and through trusted vendors and partners.
            </p>
            <p>
              <div
                className="btn-custom btn-lg-custom btn-warning-custom"
                role="button"
              >
                Click here to learn more
              </div>
            </p>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-dark-custom rounded">
              <div className="d-flex">
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-2 d-flex justify-content-center align-items-center">
                  <div>
                    <div>
                      <span className="h6 text-warning">Candidates</span>
                    </div>
                    <div>
                      <span className="h5 text-white">5K+</span>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-3 d-flex justify-content-center align-items-center">
                  <div>
                    <div>
                      <span className="h6 text-info">Firms</span>
                    </div>
                    <div>
                      <span className="h5 text-white">500+</span>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-3 d-flex justify-content-center align-items-center">
                  <div>
                    <div>
                      <span className="h6 text-success-custom">Jobs</span>
                    </div>
                    <div>
                      <span className="h5 text-white">30k+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-lg-end d-none d-md-block d-lg-block d-xl-block d-xxl-block">
            <img src={banner_image} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBannerComponent;
