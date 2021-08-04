import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/button.css";

const ButtonLg = (props) => {
  const { title, className, to, type } = props;

  return (
    <Link to={to}>
      <button className={`btn btn-lg ${className}`} type={type}>
        <span>{title}</span>
      </button>
    </Link>
  );
};

export default ButtonLg;
