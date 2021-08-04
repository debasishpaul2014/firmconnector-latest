import React from "react";
import { Link } from "react-router-dom";
import ButtonSm from "../Buttons/ButtonLg";
import AlertDanger from "../Alerts/AlertDanger";
import HeaderLg from "../Headers/HeaderLg";

const LoginScreenRightComponent = () => {
  return (
    <div className="col-sm-12 col-md-5 col-lg-5">
      <div className="card bg-white-custom">
        <form>
          <HeaderLg
            title={"Login to Your Account!"}
            subText={"Use your Firmconnector account credentials"}
            borderBottom={true}
          />
          <div className="form-input-holder">
            <div className="form-input-header">
              <span>Email</span>
            </div>
            <div className="d-block">
              <input
                type="email"
                className="form-control-custom"
                id="email-address"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className="form-input-holder">
            <div className="form-input-header">
              <span>Password</span>
            </div>
            <div className="d-block">
              <input
                type="password"
                className="form-control-custom"
                id="password"
                placeholder="Enter account password"
              />
            </div>
          </div>
          <p className="text-end">
            forgot password?
            <Link to="forgot-password"> click here</Link>
          </p>

          <div className="form-button-holder justify-content-end mt-4">
            <ButtonSm
              className="btn-primary"
              role="button"
              title="Submit"
              type="button"
              to={"#"}
            />
          </div>

          <div className="d-block mt-4">
            <AlertDanger
              title={"oops"}
              message={"This is a danger alert—check it out!"}
            />
          </div>
        </form>
        <div className="d-block mt-3">
          <hr />
        </div>
        <div>
          <span>
            By signing in you are agreeing to our -{" "}
            <Link>
              <span>Terms of Use & Privacy Policy</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreenRightComponent;
