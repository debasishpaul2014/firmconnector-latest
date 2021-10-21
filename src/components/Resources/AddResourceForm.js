import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import LoadingPageSm from "../CommonComponent/LoadingPageSm";
import HeaderSm from "../Headers/HeaderSm";
import InputLebelComponent from "../InputLebel/InputLebelComponent";
import { Button } from "react-bootstrap";
import { AlertDanger, AlertSuccess, AlertInfo } from "../Alerts/Alert";

//import API
import createResourceManager from "../../apis/createResourceManager";

const AddResourceForm = () => {
  const { userDetails } = useAuthContext();
  const user_slug = JSON.parse(userDetails).user_slug;
  const user_primary_role = JSON.parse(userDetails).user_primary_role;
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [officePhone, setOfficePhone] = useState("");
  const [buttonText, setButtonText] = useState("Create Account");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [isValidSubmit, setIsValidSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    if (user_primary_role === "2") {
      setIsLoading(false);
    }
  }, [user_primary_role]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleContactEmailChange = (e) => {
    setContactEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOfficePhoneChange = (e) => {
    setOfficePhone(e.target.value);
  };

  const displayMainContent = () => {
    if (isLoading === true) {
      return displayLoadingBlock();
    } else {
      return displayFormBlock();
    }
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
    //check for valid phone
    const phonePattern =
      /^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/;

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

    if (!emailPattern.test(email)) {
      isInvalid = 1;
      errMessage.push("Enter a valid business email address");
    }

    if (password.trim().length === 0) {
      isInvalid = 1;
      errMessage.push("Enter valid password");
    }

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
      user_slug: user_slug,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      contactEmail: contactEmail,
      phone: phone,
      officePhone: officePhone,
    };

    try {
      createResourceManager(formData).then(async (data) => {
        if (data?.data) {
          if (data.data.status === 1) {
            succMessage.push(data.data.message);
            setSuccessMessage(succMessage);
            setIsValidSubmit(true);
            setHasSubmitError(false);
            setIsButtonDisabled(true);
            setButtonText("Create Account");

            setTimeout(() => {
              window.location.replace(
                "resources/edit-resource/" + data.data.resource_slug
              );
            }, 1000);
          } else if (data.data.status === 0) {
            errMessage.push(data.data.message);
            setErrorMessage(errMessage);
            setHasSubmitError(true);
            setIsButtonDisabled(false);
            setButtonText("Create Account");
          } else {
            errMessage.push(
              "Error happened. Unable to create profile information."
            );
            setErrorMessage(errMessage);
            setHasSubmitError(true);
            setIsButtonDisabled(false);
            setButtonText("Create Account");
          }
        } else {
          errMessage.push(
            "Error happened. Unable to create your profile information"
          );
          setErrorMessage(errMessage);
          setHasSubmitError(true);
          setIsButtonDisabled(false);
          setButtonText("Create Account");
        }
      });
    } catch (error) {
      errMessage.push("Error happened. Network error happened.");
      setErrorMessage(errMessage);
      setHasSubmitError(true);
      setIsButtonDisabled(false);
      setButtonText("Create Account");
    }
  };

  const displayLoadingBlock = () => {
    return <LoadingPageSm title={"Loading, please wait..."} />;
  };

  const displayTopBlock = () => {
    return (
      <div className="d-flex flex-column mb-4">
        <h1>Add Resource</h1>
        <span className="text-muted-custom">
          Create a resource profile within your firm
        </span>
      </div>
    );
  };

  const displayForm = () => {
    return (
      <>
        <div className="d-block">
          <p>
            <strong>Please Note</strong>{" "}
            <span className="text-info-light-custom">
              ***Fill up all fields to create a Resource account
            </span>
          </p>
        </div>
        <div className="d-block">
          <div className="card-custom p-3 h-100 bg-white">
            <div className="card-body">
              <form id="create-frm">
                {displayloginBlock()}
                {displayprofileBlock()}
                {displayContactBlock()}
                {displaySubmitButton()}
                {displayStatusMessage()}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };

  const displayloginBlock = () => {
    return (
      <div className="d-block mb-4">
        <div className="d-block">
          <HeaderSm
            title={"Add login informations"}
            subText={"These informations will be used while login"}
            borderBottom={true}
          />
        </div>

        <div className="d-block d-md-flex d-lg-flex d-xlg-flex row">
          <div className="col-12 col-md-6 col-lg-6 col-xlg-6">
            <div className="form-input-holder">
              <InputLebelComponent title="Email Address" />
              <div className="d-block">
                <input
                  type="email"
                  className="form-control-custom"
                  id="email-address"
                  placeholder="Enter email address"
                  onChange={handleEmailChange}
                  value={email}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xlg-6">
            <div className="form-input-holder">
              <InputLebelComponent title="Password" />
              <div className="d-block">
                <input
                  type="password"
                  className="form-control-custom"
                  id="last-name"
                  placeholder="Enter password"
                  onChange={handlePasswordChange}
                  value={password}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const displayprofileBlock = () => {
    return (
      <div className="d-block mb-4">
        <div className="d-block">
          <HeaderSm
            title={"Add profile informations"}
            subText={"These informations will be used in profile view"}
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
                  className="form-control-custom"
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
                  className="form-control-custom"
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
    );
  };

  const displayContactBlock = () => {
    return (
      <div className="d-block">
        <div className="d-block">
          <HeaderSm
            title={"Add contact informations"}
            subText={"These informations will be used in profile"}
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
                  className="form-control-custom"
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
                  className="form-control-custom"
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
                  className="form-control-custom"
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
    );
  };

  const displaySubmitButton = () => {
    return (
      <div className="form-button-holder justify-content-end mt-4">
        <Button
          variant="primary"
          disabled={isButtonDisabled}
          onClick={handleFormSubmit}
        >
          {buttonText}
        </Button>
      </div>
    );
  };

  const displayStatusMessage = () => {
    return (
      <div className="d-block mt-4">
        {displayErrorMessage()} {displaySuccessMessage()}
      </div>
    );
  };

  const displayErrorMessage = () => {
    if (hasSubmitError) {
      return <AlertDanger title={"Oops"} message={errorMessage} />;
    }
  };

  const displaySuccessMessage = () => {
    if (isValidSubmit) {
      return <AlertSuccess title={"Success"} message={successMessage} />;
    }
  };

  const displayFormBlock = () => {
    if (user_primary_role === "2") {
      return (
        <>
          {displayTopBlock()}
          {displayForm()}
        </>
      );
    } else {
      return (
        <AlertInfo
          title={"Note"}
          message={"You do not have access to create Resource"}
        />
      );
    }
  };

  return <div className="d-block">{displayMainContent()}</div>;
};

export default AddResourceForm;
