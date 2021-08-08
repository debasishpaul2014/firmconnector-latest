import React from "react";

const PageHeader = (props) => {
  const { pageHeaderTitle, subText } = props;

  return (
    <div className="b-block mb-5 my-lg-4 my-xl-4 my-xxl-4">
      <div className="d-block">
        <span className="h3 fw-bold-custom text-dark-custom">
          {pageHeaderTitle}
        </span>
      </div>
      <div className="d-block">
        <span className="text-muted-custom">{subText}</span>
      </div>
    </div>
  );
};

export default PageHeader;
