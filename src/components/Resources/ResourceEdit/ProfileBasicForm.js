import React, { useState } from "react";
import { Button } from "react-bootstrap";

import InputLebelComponent from "../../InputLebel/InputLebelComponent";
import HeaderXSm from "../../Headers/HeaderXSm";

const ProfileBasicForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [buttonText, setButtonText] = useState("Update Profile");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [isValidSubmit, setIsValidSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
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

    let isInvalid = 0;
    let errMessage = [];

    if (firstName.trim().length === 0) {
      isInvalid = 1;
      errMessage.push("Enter first name");
    }

    if (lastName.trim().length === 0) {
      isInvalid = 1;
      errMessage.push("Enter last name");
    }

    if (isInvalid === 1) {
      setErrorMessage(errMessage);
      setHasSubmitError(true);
      setIsButtonDisabled(false);
      setButtonText("Create Account");
    } else {
      submitForm();
    }
  };

  const submitForm = () => {
    let errMessage = [];
    let succMessage = [];

    let formData = {
      firstName: firstName,
      lastName: lastName,
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
                title={"Edit profile informations"}
                subText={
                  "These informations will be used to display on profile"
                }
                borderBottom={true}
              />
            </div>

            <div className="d-block d-md-flex d-lg-flex d-xlg-flex row">
              <div className="col-12 col-md-6 col-lg-6 col-xlg-6">
                <div className="form-input-holder">
                  <InputLebelComponent title="First Name" />
                  <div className="d-block">
                    <input
                      type="text"
                      className="form-control-custom-sm"
                      id="first-name"
                      placeholder="Enter first name"
                      onChange={handleFirstNameChange}
                      value={firstName}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xlg-6">
                <div className="form-input-holder">
                  <InputLebelComponent title="Last Name" />
                  <div className="d-block">
                    <input
                      type="text"
                      className="form-control-custom-sm"
                      id="last-name"
                      placeholder="Enter last name"
                      onChange={handleLastNameChange}
                      value={lastName}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {displaySubmitButton()}
        </form>
      </div>
    </div>
  );
};

export default ProfileBasicForm;
