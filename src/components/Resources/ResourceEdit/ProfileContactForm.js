import React, { useState } from "react";
import { Button } from "react-bootstrap";

import InputLebelComponent from "../../InputLebel/InputLebelComponent";
import HeaderXSm from "../../Headers/HeaderXSm";

const ProfileContactForm = () => {
  const [contactEmail, setContactEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [officePhone, setOfficePhone] = useState("");
  const [buttonText, setButtonText] = useState("Update Contact");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [isValidSubmit, setIsValidSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleContactEmailChange = (e) => {
    setContactEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOfficePhoneChange = (e) => {
    setOfficePhone(e.target.value);
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

    const phonePattern =
      /^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/;

    let isInvalid = 0;
    let errMessage = [];

    if (!emailPattern.test(contactEmail)) {
      isInvalid = 1;
      errMessage.push("Enter a valid contact business email address");
    }

    if (!phonePattern.test(phone)) {
      isInvalid = 1;
      errMessage.push("Enter a valid phone number");
    }

    if (!phonePattern.test(officePhone)) {
      isInvalid = 1;
      errMessage.push("Enter a valid office phone number");
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
      contactEmail: contactEmail,
      phone: phone,
      officePhone: officePhone,
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
                title={"Edit contact informations"}
                subText={
                  "These informations will be used to display on profile"
                }
                borderBottom={true}
              />
            </div>

            <div className="d-block d-md-flex d-lg-flex d-xlg-flex row">
              <div className="col-12 col-md-6 col-lg-6 col-xlg-6">
                <div className="form-input-holder">
                  <InputLebelComponent title="Contact Email" />
                  <div className="d-block">
                    <input
                      type="email"
                      className="form-control-custom-sm"
                      id="contact-email"
                      placeholder="Enter contact email"
                      onChange={handleContactEmailChange}
                      value={contactEmail}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xlg-6">
                <div className="form-input-holder">
                  <InputLebelComponent title="Phone Number" />
                  <div className="d-block">
                    <input
                      type="text"
                      className="form-control-custom-sm"
                      id="phone-number"
                      placeholder="Enter phone number"
                      onChange={handlePhoneChange}
                      value={phone}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xlg-6">
                <div className="form-input-holder">
                  <InputLebelComponent title="Office Phone" />
                  <div className="d-block">
                    <input
                      type="text"
                      className="form-control-custom-sm"
                      id="office-phone-number"
                      placeholder="Enter office phone number"
                      onChange={handleOfficePhoneChange}
                      value={officePhone}
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

export default ProfileContactForm;
