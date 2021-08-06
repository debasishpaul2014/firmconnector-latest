import React from "react";

import enterprise_companies from "../../assets/images/enterprise_companies.svg";
import professional_services_firms from "../../assets/images/professional_services_firms.svg";
import staffing_firms from "../../assets/images/staffing_firms.svg";
import ButtonSm from "../Buttons/ButtonSm";

const SelectOrganizationComponent = () => {
  return (
    <div className="album py-5">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="display-6 fw-bold">Select your organization type</h1>
          <p className="lead">And discover how FirmConnector can help you</p>
        </div>
      </section>

      <div className="album pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-2">
              <div className="card text-white bg-dark-custom rounded-5 shadow-lg">
                <div className="card-image-custom-holder p-5">
                  <img
                    src={enterprise_companies}
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Enterprise Companies</h5>
                  <p className="card-text">
                    Find expertise across your network
                  </p>
                  <ButtonSm
                    className="btn-light-custom"
                    role="button"
                    title="Learn more"
                    type="button"
                    to="#"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="card text-white bg-dark rounded-5 shadow-lg">
                <div className="card-image-custom-holder p-5">
                  <img
                    src={professional_services_firms}
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Professional Services Firms</h5>
                  <p className="card-text">
                    Improve the utilization of your team
                  </p>
                  <ButtonSm
                    className="btn-light-custom"
                    role="button"
                    title="Learn more"
                    type="button"
                    to="#"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="card text-white bg-info-custom rounded-5 shadow-lg">
                <div className="card-image-custom-holder p-5">
                  <img src={staffing_firms} className="img-fluid" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Staffing Firms</h5>
                  <p className="card-text">Place more candidates</p>
                  <ButtonSm
                    className="btn-light-custom"
                    role="button"
                    title="Learn more"
                    type="button"
                    to="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectOrganizationComponent;
