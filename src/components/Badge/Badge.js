import React from "react";
import "./style.css";

const BadgeSuccess = (props) => {
  const { title } = props;

  return (
    <div className="badge-custom badge-success w-auto d-inline-block">
      <small>{title}</small>
    </div>
  );
};

export { BadgeSuccess };
