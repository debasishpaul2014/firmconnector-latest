import React from "react";

import tell_company from "../../assets/images/tell_company.svg";
import ButtonLg from "../Buttons/ButtonLg";

const ThirdBlock = () => {
  return (
    <div className="bg-dark-custom text-white third-block">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center py-5">
          <div className="col-12 col-sm-8 col-lg-5 p-4">
            <img
              src={tell_company}
              className="d-block mx-lg-auto img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-7">
            <h1 className="display-6 mb-3 fw-bold">
              Gain easy access to specialists
            </h1>
            <p className="text-muted-custom">
              Staffing needs can change quickly when a new project lands or a
              position needs to be filled. Perhaps you’re already working on a
              project, and need to identify a specialist to bounce ideas off of.
            </p>
            <p className="text-muted-custom">
              FirmConnector allows you to quickly and easily access the right
              people with the right skills for the job.
            </p>
            <h1 className="display-6 mb-3 fw-bold text-success-custom">
              Fast. Easy. And…
            </h1>
            <p className="text-muted-custom">
              Best of all, you will ensure you are fully utilizing your own
              workforce before turning to outside sources.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <ButtonLg
                className="btn-warning-custom"
                role="button"
                title="View Dashboard"
                type="button"
                to="#"
              />

              <ButtonLg
                className="btn-light-custom"
                role="button"
                title="Create Account"
                type="button"
                to="#"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
