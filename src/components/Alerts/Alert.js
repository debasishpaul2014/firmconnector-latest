import React from "react";
import "./alert.css";

const AlertDanger = (props) => {
  const { title, message } = props;

  return (
    <div className="alert-custom alert-danger-custom">
      <div>
        <span className="text-danger-custom fw-bold">{title}</span>
      </div>
      <div>
        <span className="text-danger-custom text-sm-custom">{message}</span>
      </div>
    </div>
  );
};

const AlertSuccess = (props) => {
  const { title, message } = props;

  return (
    <div className="alert-custom alert-success-custom">
      <div>
        <span className="text-success-custom fw-bold">{title}</span>
      </div>
      <div>
        <span className="text-success-custom text-sm-custom">{message}</span>
      </div>
    </div>
  );
};

const AlertInfo = (props) => {
  const { title, message } = props;

  return (
    <div className="alert-custom alert-info-custom">
      <div>
        <span className="text-info-custom fw-bold">{title}</span>
      </div>
      <div>
        <span className="text-info-custom text-sm-custom">{message}</span>
      </div>
    </div>
  );
};

const AlertWarning = (props) => {
  const { title, message } = props;

  return (
    <div className="alert-custom alert-warning-custom">
      <div>
        <span className="text-dark-custom fw-bold">{title}</span>
      </div>
      <div>
        <span className="text-dark-custom text-sm-custom">{message}</span>
      </div>
    </div>
  );
};

export { AlertDanger, AlertSuccess, AlertInfo, AlertWarning };
