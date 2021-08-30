import React from "react";
import IconContainerSm from "../../Iconcontainer/IconContainerSm";
import firm_logo from "../../../assets/images/firm_logo.png";

const GeneralInfo = () => {
  return (
    <div className="col-12 col-lg-5 col-xl-5 col-xxl-5 mb-3 top-card-section">
      <div className="card-custom h-100">
        <div className="card-body">
          <div className="d-block mb-3">
            <span className="fw-bold">General Info</span>
          </div>
          <div className="d-flex flex-column">
            <div className="d-block mb-4">
              <div className="d-block">
                <IconContainerSm iconName={"FiMail"} color="var(--black)" />
              </div>
              <div className="d-block border-bottom pb-2">
                <span className="fw-bold">debasishpaul2014@gmail.com</span>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-6">
                <div className="d-block">
                  <IconContainerSm
                    iconName={"FiSmartphone"}
                    color="var(--black)"
                  />
                </div>
                <div className="d-block border-bottom pb-2">
                  <span className="fw-bold">+(91) 704 400 4365</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-block">
                  <IconContainerSm
                    iconName={"FiPhoneCall"}
                    color="var(--black)"
                  />
                </div>
                <div className="d-block border-bottom pb-2">
                  <span className="fw-bold">+(033) 123456789</span>
                </div>
              </div>
            </div>

            <div className="d-block mb-4">
              <div className="firm-logo-lg">
                <img className="img-fluid" src={firm_logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
