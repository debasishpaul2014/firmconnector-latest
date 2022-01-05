import React, { useState, useEffect } from "react";
import InputLebelComponent from "../../InputLebel/InputLebelComponent";
import HeaderXSm from "../../Headers/HeaderXSm";

const AccountLoginDetailsForm = (props) => {
  const { userDetails } = props;

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (userDetails) {
      setEmail(userDetails.user_email);
    }
  }, [userDetails]);

  return (
    <div className="card-custom bg-white">
      <div className="card-body">
        <form id="create-frm">
          <div className="d-block">
            <div className="d-block">
              <HeaderXSm
                title={"Login Informations"}
                subText={"These informations will be used while login"}
                borderBottom={true}
              />
            </div>

            <div className="d-block d-md-flex d-lg-flex d-xlg-flex row">
              <div className="col-12 col-md-6 col-lg-6 col-xlg-6">
                <div className="form-input-holder">
                  <InputLebelComponent title="Login Email Address" />
                  <div className="d-block">
                    <input
                      type="email"
                      className="form-control-custom-sm"
                      id="email-address"
                      placeholder="Enter email address"
                      value={email}
                      autoComplete="off"
                      disabled="disabled"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountLoginDetailsForm;
