import React from "react";
import { Link } from "react-router-dom";
import ButtonSm from "../../Buttons/ButtonSm";
import AlertDanger from "../../Alerts/AlertDanger";
import HeaderSm from "../../Headers/HeaderSm";
import InputLebelComponent from "../../InputLebel/InputLebelComponent";

const SignupScreenRightComponent = () => {
  return (
    <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
      <div className="card bg-white-custom p-3 shadow-lg rounded">
        <form>
          <HeaderSm
            title={"Create Organization"}
            subText={
              "Please fill up your profile details below. You are one step behind to get started."
            }
            borderBottom={true}
          />
          <div className="form-input-holder">
            <InputLebelComponent title={"Organization Name"} />
            <div className="d-block">
              <input
                type="text"
                className="form-control-custom"
                id="contact_name"
                placeholder="Enter organization name"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-input-holder">
            <InputLebelComponent title={"Email"} />
            <div className="d-block">
              <input
                type="email"
                className="form-control-custom"
                id="email_address"
                placeholder="Enter email address"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-input-holder">
            <InputLebelComponent title={"Password"} />
            <div className="d-block">
              <input
                type="password"
                className="form-control-custom"
                id="password"
                placeholder="Enter account password"
              />
            </div>
          </div>

          <div className="form-button-holder justify-content-end mt-4">
            <ButtonSm
              className="btn-primary"
              role="button"
              title="Sign Up"
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

export default SignupScreenRightComponent;
