import React from "react";

const DashboardBlockTitle = (props) => {
  const { title, subTitle } = props;

  return (
    <div className="block-title">
      <div className="d-block">
        <span className="fw-medium-custom text-dark-custom text-sm-custom">
          {title}
        </span>
      </div>
      <div className="d-block" style={{ lineHeight: "1rem" }}>
        <span className="text-muted-custom text-x-sm-custom">{subTitle}</span>
      </div>
    </div>
  );
};

export default DashboardBlockTitle;
