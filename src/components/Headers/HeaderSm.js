import React from "react";

const HeaderSm = (props) => {
  const { title, subText, borderBottom } = props;

  return (
    <div
      className={`header-holder ${borderBottom ? "border-bottom-light" : null}`}
    >
      <div className="h5 fw-bold-custom">{title}</div>
      <span>{subText}</span>
    </div>
  );
};

export default HeaderSm;
