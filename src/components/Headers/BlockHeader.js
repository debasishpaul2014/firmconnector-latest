import React from "react";

const HeaderLg = (props) => {
  const { title, subText } = props;

  return (
    <div className="header-holder">
      <div className="h5 fw-bold-custom d-block">{title}</div>
      <div className="d-block">
        <span className="text-sm-custom text-muted-custom">{subText}</span>
      </div>
    </div>
  );
};

export default HeaderLg;
