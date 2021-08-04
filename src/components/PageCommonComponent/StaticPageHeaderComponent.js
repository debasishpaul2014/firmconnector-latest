import React from "react";

const StaticPageHeaderComponent = (props) => {
  const { title, description_sm } = props;

  return (
    <div className="container py-5">
      <div>
        <h1 className="display-6 fw-bold">
          <span className="text-dark-custom"> {title} </span>
        </h1>
        <div>
          <span className="text-sm text-muted">{description_sm}</span>
        </div>
      </div>
    </div>
  );
};

export default StaticPageHeaderComponent;
