import React from "react";
import contact_us from "../../assets/images/contact_us.svg";
import HeaderSm from "../Headers/HeaderSm";

const ContactScreenLeftBlock = () => {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-5">
      <div className="d-block mb-4">
        <div className="d-block">
          <span className="h5 fw-bold-custom">Support email</span>
        </div>
        <div className="d-block">
          <span className="text-info-light-custom">
            support@firmconnector.com
          </span>
        </div>
      </div>
      <div className="d-block login-page-lg-image mb-4">
        <img src={contact_us} className="img-full-width" alt="..." />
      </div>
    </div>
  );
};

export default ContactScreenLeftBlock;
