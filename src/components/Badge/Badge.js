import React from "react";

const BadgeSuccess = (props) => {
  const { title } = props;

  return (
    <div className="badge-custom badge-success">
      <small>{title}</small>
    </div>
  );
};

export { BadgeSuccess };
