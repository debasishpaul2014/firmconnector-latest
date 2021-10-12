import React from "react";

const FirmLogoSm = (props) => {
  const { imgSrc } = props;
  return (
    <div className="firm-logo-sm">
      <img className="img-fluid" src={imgSrc} alt="" />
    </div>
  );
};

export default FirmLogoSm;
