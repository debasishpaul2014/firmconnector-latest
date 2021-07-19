import React from "react";

import banner_image from "../../assets/images/banner_left.svg";

const TopBannerComponent = () => {
  return (
    <div className="jumbotron bg-info bg-gradient">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1 className="ddisplay-6 text-white">
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
