import React from "react";

const HeaderLg = (props) => {
  const { title, subText, borderBottom } = props;

  return (
    <div
      className={`header-holder ${borderBottom ? "border-bottom-light" : null}`}
    >
      <div className="display-6 fw-bold mb-2">{title}</div>
      <div>
        <span className="text-muted-custom">{subText}</span>
      </div>
    </div>
  );
};

export default HeaderLg;
