import React from "react";

import tell_company from "../../assets/images/tell_company.svg";

const ThirdBlock = () => {
  return (
    <div className="bg-dark-custom text-white">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={tell_company} className="d-block mx-lg-auto img-fluid" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-6 mb-3">Gain easy access to specialists</h1>
            <p>
              Staffing needs can change quickly when a new project lands or a
              position needs to be filled. Perhaps you’re already working on a
              project, and need to identify a specialist to bounce ideas off of.
            </p>
            <p>
              FirmConnector allows you to quickly and easily access the right
              people with the right skills for the job.
            </p>
            <h1 className="display-6 mb-3 text-warning">Fast. Easy. And…</h1>
            <p>
              Best of all, you will ensure you are fully utilizing your own
              workforce before turning to outside sources.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                className="btn-custom btn-lg-custom btn-primary-custom"
                type="button"
              >
                View Dashboard
              </button>
              <button
                className="btn-custom btn-lg-custom btn-light-custom"
                type="button"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
