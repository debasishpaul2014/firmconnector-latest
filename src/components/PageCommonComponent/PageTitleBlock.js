import React from "react";

const PageTitleBlock = (props) => {
  const { title, subText } = props;

  return (
    <div>
      <div className="display-6 fw-bold text-white-custom">{title}</div>
      <div>
        <span className="bd-lead text-muted-custom">{subText}</span>
      </div>
    </div>
  );
};

export default PageTitleBlock;
