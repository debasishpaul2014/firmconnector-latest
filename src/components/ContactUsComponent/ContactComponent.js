import React from "react";
import StaticPageHeaderComponent from "../PageCommonComponent/StaticPageHeaderComponent";

const ContactComponent = () => {
  return (
    <>
      <div className="container-fluid bg-info-light-custom">
        <StaticPageHeaderComponent
          title={"Contact Us"}
          description_sm={
            "Know something about us to make a good understanding."
          }
        />
      </div>
      <div className="container-fluid bg-white-custom">
        <div className="container py-5"></div>
      </div>
    </>
  );
};

export default ContactComponent;
