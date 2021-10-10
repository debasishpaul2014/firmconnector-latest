import React from "react";
import ImageIconSmHolder from "../../Iconcontainer/ImageIconSmHolder";

import firm_logo from "../../../assets/images/firm_logo.png";
import envelope from "../../../assets/images/email.svg";
import mobile from "../../../assets/images/mobile.svg";
import phone from "../../../assets/images/phone.svg";

const GeneralInfo = (props) => {
  const displayView = props.displayView;

  const displayGeneralInfoBlock = () => {
    return (
      <div className="profile-info-block-holder">
        <div className="general-info-block">
          <div className="info-icon-holder">
            <ImageIconSmHolder imageUrl={envelope} />
          </div>
          <div className="d-block pb-1 pt-1">
            <span>debasishpaul2014@gmail.com</span>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 mb-4">
            <div className="general-info-block">
              <div className="info-icon-holder">
                <ImageIconSmHolder imageUrl={mobile} />
              </div>
              <div className="d-block pb-1 pt-1">
                <span>+(91) 704 400 4365</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 mb-4">
            <div className="general-info-block">
              <div className="info-icon-holder">
                <ImageIconSmHolder imageUrl={phone} />
              </div>
              <div className="d-block pb-1 pt-1">
                <span>+(033) 2335 568</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const inquireView = () => {
    return (
      <div className="profile-info-block-holder">
        <form className="g-3">
          <div className="mb-2">
            <textarea
              className="form-control"
              id="inquire-text"
              rows="3"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <div>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn-custom btn-primary-custom">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="col-12 col-lg-5 col-xl-5 col-xxl-5 mb-3 top-card-section">
      <div className="card-custom h-100">
        <div className="card-body">
          <div className="d-flex flex-column">
            {displayView === "default"
              ? displayGeneralInfoBlock()
              : inquireView()}
            <div className="d-flex mb-4 mt-4 justify-content-center align-items-center">
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
