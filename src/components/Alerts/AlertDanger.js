import React from "react";
import "./alert.css";

const AlertDanger = (props) => {
  const { title, message } = props;

  return (
    <div className="alert-custom alert-danger-custom">
      <div>
        <span className="text-md-custom">{title}</span>
      </div>
      <div>
        <span className="text-white-custom">{message}</span>
      </div>
    </div>
  );
};

export default AlertDanger;
