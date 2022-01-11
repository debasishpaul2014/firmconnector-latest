import React from "react";

const HeaderXSm = (props) => {
  const { title, subText, borderBottom } = props;

  return (
    <div
      className={`header-holder ${borderBottom ? "border-bottom-light" : null}`}
    >
      <p className="h5 fw-bold-custom">{title}</p>
      <span className="text-muted-custom">{subText}</span>
    </div>
  );
};

export default HeaderXSm;
