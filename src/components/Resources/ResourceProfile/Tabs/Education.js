import React, { useState, useEffect } from "react";

const Education = (props) => {
  const { educationDetails } = props;
  const [educationArray, setEducationArray] = useState(false);

  useEffect(() => {
    if (educationDetails) {
      console.log(educationDetails);
      setEducationArray(educationDetails);
    }
  }, [educationDetails]);

  const displayEducationHistory = () => {
    if (educationArray) {
      return (
        <>
          {educationArray.map((item, index) => {
            return displayEducationBlock(item, index);
          })}
        </>
      );
    }
  };

  const degreeName = (education) => {
    return (
      <span className="text-dark-custom fw-bold">
        {education.degree_name !== null
          ? education.degree_name
          : "Not available"}{" "}
        in {education.subject !== null ? education.subject : "Not available"}
      </span>
    );
  };

  const displaySchoolName = (education) => {
    if (education.school_name !== "" && education.school_name !== null) {
      return <span className="text-dark-custom">{education.school_name}</span>;
    } else {
      return (
        <span className="text-danger-custom">Institute name not available</span>
      );
    }
  };

  const displayPassedOn = (passedOn) => {
    if (passedOn !== "" && passedOn !== null) {
      return (
        <span className="text-dark-custom text-x-sm-custom fw-bold">
          Passed on {passedOn}
        </span>
      );
    }
  };

  const displayEducationBlock = (education, key) => {
    return (
      <div key={key} className="col-12 mb-3">
        <div className="card-custom bg-white shadow-sm">
          <div className="card-body">
            <div className="d-block d-md-flex d-xl-flex d-lg-flex row align-items-center">
              <div className="col-12">{degreeName(education)}</div>
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

  return <div className="d-block">{displayEducationHistory()}</div>;
};

export default Education;
