import React from "react";

const HeaderSm = (props) => {
  const { title, subText, borderBottom } = props;

  return (
    <div
      className={`header-holder ${borderBottom ? "border-bottom-light" : null}`}
    >
      <div className="h4 fw-bold">{title}</div>
      <p className="text-muted-custom">{subText}</p>
    </div>
  );
};

export default HeaderSm;
