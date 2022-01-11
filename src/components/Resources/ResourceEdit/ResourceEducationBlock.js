import React, { useState, useEffect, useRef } from "react";
import HeaderXSm from "../../Headers/HeaderXSm";
import { Button, Modal } from "react-bootstrap";
import InputLebelComponent from "../../InputLebel/InputLebelComponent";
import { AlertDanger, AlertSuccess } from "../../Alerts/Alert";
import moment from "moment";
import saveEducationDetails from "../../../apis/saveEducationDetails";

const ResourceEducationBlock = (props) => {
  const { education_details, resourceSlug } = props;
  const [show, setShow] = useState(false);

  const [educationArray, setEducationArray] = useState(false);

  const [degreeName, setDegreeName] = useState("");
  const [subject, setSubject] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [passedOn, setPassedOn] = useState(new Date());

  const [buttonText, setButtonText] = useState("Save Education Details");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [isValidSubmit, setIsValidSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const statusRef = useRef(null);
  const executeScroll = () => statusRef.current.scrollIntoView();

  useState(false);

  useEffect(() => {
    setEducationArray(education_details);
  }, [education_details]);

  const handleDegreeNameChange = (e) => {
    setDegreeName(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handlePassedOnChange = (e) => {
    setPassedOn(e.target.value);
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

    if (degreeName.trim().length === 0) {
      isInvalid = 1;
      errMessage.push("Enter your degree name");
    }

    if (subject.trim().length === 0) {
      isInvalid = 1;
      errMessage.push("Enter your subject name");
    }

    if (schoolName.trim().length === 0) {
      isInvalid = 1;
      errMessage.push("Enter your school name");
    }

    if (!moment(passedOn, "YYYY-MM-DD").isValid()) {
      isInvalid = 1;
      errMessage.push("Enter your passing year");
    }

    if (isInvalid === 1) {
      executeScroll();
      setErrorMessage(errMessage);
      setHasSubmitError(true);
      setIsButtonDisabled(false);
      setButtonText("Update Contact Details");
    } else {
      submitForm();
    }
  };

  const submitForm = () => {
    let errMessage = [];
    let succMessage = [];

    let formData = {
      resourceSlug: resourceSlug,
      degreeName: degreeName,
      subject: subject,
      schoolName: schoolName,
      passedOn: passedOn,
    };

    try {
      saveEducationDetails(formData).then(async (data) => {
        if (data?.data) {
          if (data.data.status === 1) {
            succMessage.push(data.data.message);
            setSuccessMessage(succMessage);
            setIsValidSubmit(true);
            setHasSubmitError(false);
            // setIsButtonDisabled(false);
            setButtonText("Save Education Details");
            executeScroll();
            setTimeout(() => {
              setIsValidSubmit(false);
              setHasSubmitError(false);
              setErrorMessage(false);
              setSuccessMessage(false);
              window.location.reload(false);
            }, 2000);
          } else if (data.data.status === 0) {
            executeScroll();
            errMessage.push(data.data.message);
            setErrorMessage(errMessage);
            setHasSubmitError(true);
            setIsButtonDisabled(false);
            setButtonText("Save Education Details");
          } else {
            executeScroll();
            errMessage.push(
              "Error happened. Unable to save education information."
            );
            setErrorMessage(errMessage);
            setHasSubmitError(true);
            setIsButtonDisabled(false);
            setButtonText("Save Education Details");
          }
        } else {
          executeScroll();
          errMessage.push(
            "Error happened. Unable to save education information."
          );
          setErrorMessage(errMessage);
          setHasSubmitError(true);
          setIsButtonDisabled(false);
          setButtonText("Save Education Details");
        }
      });
    } catch (error) {
      executeScroll();
      errMessage.push("Error happened. Network error happened.");
      setErrorMessage(errMessage);
      setHasSubmitError(true);
      setIsButtonDisabled(false);
      setButtonText("Save Education Details");
    }
  };

  const displayEducationHistory = () => {
    if (educationArray) {
      return (
        <>
          {educationArray.map((item, index) => {
            return displayEducationBlock(item, index);
          })}
        </>
      );
    } else {
      return (
        <span className="text-muted-custom">Education details not added!</span>
      );
    }
  };

  const displayDegreeName = (education) => {
    return (
      <span className="text-dark-custom fw-bold">
        {education.degree_name !== null ? (
          <span className="text-success-custom">{education.degree_name}</span>
        ) : (
          "Not available"
        )}{" "}
        in {education.subject !== null ? education.subject : "Not available"}
      </span>
    );
  };

  const displaySchoolName = (education) => {
    if (education.school_name !== "" && education.school_name !== null) {
      return (
        <span className="text-info-custom text-x-sm-custom fw-medium-custom">
          {education.school_name}
        </span>
      );
    } else {
      return (
        <span className="text-danger-custom text-x-sm-custom fw-medium-custom">
          Institute name not available
        </span>
      );
    }
  };

  const displayPassedOn = (passedOn) => {
    if (passedOn !== "" && passedOn !== null) {
      return (
        <span className="text-x-sm-custom fw-medium-custom">
          Passed on {passedOn}
        </span>
      );
    }
  };

  const handleClose = () => {
    setShow(false);
    window.location.reload(false);
  };
  const handleShow = () => setShow(true);

  const displayAddEducationButton = () => {
    return (
      <div className="d-block justify-content-end">
        <Button variant="primary" size="sm" onClick={() => handleShow()}>
          Add New Education
        </Button>
      </div>
    );
  };

  const showModal = () => {
    return (
      <Modal show={show} onHide={() => handleClose()} scrollable={true}>
        <Modal.Header>
          <Modal.Title>Add your education details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form to save your education details</p>
          <form id="create-frm">
            <div className="d-block mb-4">
              <div className="d-block">
                <HeaderXSm
                  title={"Contact Informations"}
                  subText={
                    "These informations will be used to display on profile"
                  }
                  borderBottom={true}
                />
              </div>

              <div className="d-block">
                <div className="col-12 col-md-12 col-lg-12 col-xlg-12">
                  <div className="form-input-holder">
                    <InputLebelComponent title="Degree Name" />
                    <div className="d-block">
                      <input
                        type="text"
                        className="form-control-custom-sm"
                        id="degree-name"
                        placeholder="Enter degree name"
                        onChange={handleDegreeNameChange}
                        value={degreeName}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block">
                <div className="col-12 col-md-12 col-lg-12 col-xlg-12">
                  <div className="form-input-holder">
                    <InputLebelComponent title="Subject" />
                    <div className="d-block">
                      <input
                        type="text"
                        className="form-control-custom-sm"
                        id="subject"
                        placeholder="Enter your subject"
                        onChange={handleSubjectChange}
                        value={subject}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block">
                <div className="col-12 col-md-12 col-lg-12 col-xlg-12">
                  <div className="form-input-holder">
                    <InputLebelComponent title="Institute Name" />
                    <div className="d-block">
                      <div className="d-block">
                        <input
                          type="text"
                          className="form-control-custom-sm"
                          id="school"
                          placeholder="Enter your school name"
                          onChange={handleSchoolNameChange}
                          value={schoolName}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-block">
                <div className="col-12 col-md-12 col-lg-12 col-xlg-12">
                  <div className="form-input-holder">
                    <InputLebelComponent title="Passed On" />
                    <div className="d-block">
                      <div className="d-block">
                        <input
                          type="date"
                          className="form-control-custom-sm"
                          id="passed-on"
                          placeholder="Enter year of passing"
                          onChange={handlePassedOnChange}
                          value={passedOn}
                          autoComplete="off"
                          onKeyDown={(e) => {
                            e.preventDefault();
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {displaySubmitButton()}
            <div className="d-block" ref={statusRef}>
              {displayStatusMessage()}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
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

  const displayStatusMessage = () => {
    return (
      <>
        {displayErrorMessage()} {displaySuccessMessage()}
      </>
    );
  };

  const displayErrorMessage = () => {
    if (hasSubmitError) {
      return (
        <div className="d-block mt-4">
          <AlertDanger title={"Oops"} message={errorMessage} />
        </div>
      );
    }
  };

  const displaySuccessMessage = () => {
    if (isValidSubmit) {
      return (
        <div className="d-block mt-4">
          <AlertSuccess title={"Success"} message={successMessage} />
        </div>
      );
    }
  };

  const displayEducationBlock = (education, key) => {
    return (
      <div key={key} className="col-12 mb-3">
        <div className="card-custom bg-white border-dark">
          <div className="card-body">
            <div className="d-block d-md-flex d-xl-flex d-lg-flex row align-items-center">
              <div className="col-12">{displayDegreeName(education)}</div>
            </div>
            <div className="d-block d-md-flex d-xl-flex d-lg-flex row align-items-center">
              <div className="col-12">{displaySchoolName(education)}</div>
            </div>
            <div className="d-block d-md-flex d-xl-flex d-lg-flex row align-items-center">
              <div className="col-12">
                {displayPassedOn(education.passed_on)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card-custom bg-white">
      <div className="card-body">
        <div className="d-block">
          <div className="d-block">
            <HeaderXSm
              title={"Education History"}
              subText={"These informations will be used to display on profile"}
              borderBottom={true}
            />
          </div>
          <div className="d-block mb-3">{displayAddEducationButton()}</div>
          <div className="d-block">{displayEducationHistory()}</div>
        </div>
        {showModal()}
      </div>
    </div>
  );
};

export default ResourceEducationBlock;
