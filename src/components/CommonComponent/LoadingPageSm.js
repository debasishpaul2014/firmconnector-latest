import React from "react";
import loading from "../../assets/images/loading_sm.gif";

const LoadingPageSm = (props) => {
  const { title } = props;

  return (
    <div className="w-100 d-flex justify-content-center align-items-center flex-column">
      <div className="loading-block-sm mb-2 shadow">
        <img src={loading} alt="loading" className="loading-image-sm" />
      </div>
      <div className="d-block">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default LoadingPageSm;
