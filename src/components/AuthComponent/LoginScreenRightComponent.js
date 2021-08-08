import React from "react";
import { Link } from "react-router-dom";
import ButtonLg from "../Buttons/ButtonLg";
import {
  AlertDanger,
  AlertSuccess,
  AlertInfo,
  AlertWarning,
} from "../Alerts/Alert";
import HeaderSm from "../Headers/HeaderSm";
import InputLebelComponent from "../InputLebel/InputLebelComponent";

const LoginScreenRightComponent = () => {
  return (
    <div className="col-sm-12 col-md-5 col-lg-5">
      <div className="card bg-white-custom">
        <form>
          <HeaderSm
            title={"Login to Your Account!"}
            subText={"Use your Firmconnector account credentials"}
            borderBottom={true}
          />
          <div className="form-input-holder">
            <InputLebelComponent title="Email" />
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
            <InputLebelComponent title="Password" />
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
            <ButtonLg
              className="btn-primary w-100"
              role="button"
              title="Submit"
              type="button"
              to={"dashboard"}
            />
          </div>

          <div className="d-block mt-4">
            <AlertDanger
              title={"oops"}
              message={"This is a danger alert—check it out!"}
            />
            <AlertSuccess
              title={"Success"}
              message={"This is a success alert—check it out!"}
            />
            <AlertInfo
              title={"Info"}
              message={"This is a info alert—check it out!"}
            />
            <AlertWarning
              title={"Warning"}
              message={"This is a warning alert—check it out!"}
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
