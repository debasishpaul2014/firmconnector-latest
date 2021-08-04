import React from "react";
import { Link } from "react-router-dom";
import banner_image from "../../assets/images/login.svg";
import HeaderLg from "../Headers/HeaderLg";

const LoginScreenLeftComponent = () => {
  return (
    <div className="col-sm-12 col-md-7 col-lg-7 d-flex justify-content-lg-end d-none d-md-block d-lg-block d-xl-block d-xxl-block">
      <HeaderLg
        title={"Firmconnector"}
        subText={
          "Firmconnector helps you connect and share resources within organizations."
        }
        borderBottom={false}
      />
      <div className="d-block mt-4">
        <div>
          <span className="fst-normal text-muted-custom">
            If you don't have an account
          </span>
        </div>
        <div>
          <span>
            You can <Link to="sign-up">Register Here</Link>
          </span>
        </div>
      </div>
      <div className="d-block mt-4 login-page-lg-image">
        <img src={banner_image} className="img-full-width" alt="..." />
      </div>
    </div>
  );
};

export default LoginScreenLeftComponent;