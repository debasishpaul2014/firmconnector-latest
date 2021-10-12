import React from "react";
import "./style.css";

const BadgeSuccess = (props) => {
  const { title } = props;

  return (
    <div className="badge-custom badge-success w-auto d-inline-block justify-content-center align-items-center">
      <span className="text-x-sm-custom">{title}</span>
    </div>
  );
};

const BadgeLight = (props) => {
  const { title } = props;

  return (
    <div className="badge-custom bg-light w-auto d-inline-block justify-content-center align-items-center">
      <span className="text-x-sm-custom">{title}</span>
    </div>
  );
};

const BadgeInfo = (props) => {
  const { title } = props;

  return (
    <div className="badge-custom bg-info w-auto d-inline-block justify-content-center align-items-center">
      <span className="text-x-sm-custom">{title}</span>
    </div>
  );
};

export { BadgeSuccess, BadgeLight, BadgeInfo };
