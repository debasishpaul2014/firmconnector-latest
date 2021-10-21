import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import InputLebelComponent from "../../InputLebel/InputLebelComponent";
import HeaderXSm from "../../Headers/HeaderXSm";

const AccountLoginDetailsForm = (props) => {
  const { resourceDetails, resourceSlug } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Update Login Credentials");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [isValidSubmit, setIsValidSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    setEmail(resourceDetails.user_email);
    setPassword(resourceDetails.user_password_org);
  }, [resourceDetails]);

  useEffect(() => {}, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = () => {
    //disable signup button
    setIsButtonDisabled(true);

    //change signup button text while processing
    setButtonText("Processing, please wait...");

    //change alert block content
    setHasSubmitError(false);
    setErrorMessage(false);
    setIsValidSubmit(false);
    setSuccessMessage(false);

    //check for valid email
    const emailPattern =
      /^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!mail\.ru)(?!yandex\.ru)(?!mail\.com)([\w-]+.)+[\w-]{2,4})?$/;

    let isInvalid = 0;
    let errMessage = [];

    if (!emailPattern.test(email)) {
      isInvalid = 1;
      errMessage.push("Enter a valid business email address");
    }

    if (password.trim().length === 0) {
      isInvalid = 1;
      errMessage.push("Enter valid password");
    }

    if (isInvalid === 1) {
      setErrorMessage(errMessage);
      setHasSubmitError(true);
      setIsButtonDisabled(false);
      setButtonText("Update Login Credentials");
    } else {
      submitForm();
    }
  };

  const submitForm = () => {
    let errMessage = [];
    let succMessage = [];

    let formData = {
      email: email,
      password: password,
    };
  };

  const displaySubmitButton = () => {
    return (
      <div className="d-flex justify-content-end">
        <Button
          variant="primary"
          disabled={isButtonDisabled}
          onClick={handleFormSubmit}
          size="sm"
        >
          {buttonText}
        </Button>
      </div>
    );
  };

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
                      onChange={handleEmailChange}
                      value={email}
                      autoComplete="off"
                      disabled="disabled"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xlg-6">
                <div className="form-input-holder">
                  <InputLebelComponent title="Login Password" />
                  <div className="d-block">
                    <input
                      type="password"
                      className="form-control-custom-sm"
                      id="last-name"
                      placeholder="Enter password"
                      onChange={handlePasswordChange}
                      value={password}
                      autoComplete="off"
                      disabled="disabled"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {displaySubmitButton()} */}
        </form>
      </div>
    </div>
  );
};

export default AccountLoginDetailsForm;
