import React, { useState, useEffect } from "react";
import { BadgeSuccess } from "../../../Badge/Badge";

const Employment = (props) => {
  const { employmentDetails } = props;
  const [employmentArray, setEmploymentArray] = useState(false);

  useEffect(() => {
    if (employmentDetails) {
      console.log(employmentDetails);
      setEmploymentArray(employmentDetails);
    }
  }, [employmentDetails]);

  const displayEmploymentHistory = () => {
    if (employmentArray) {
      return (
        <>
          {employmentArray.map((item, index) => {
            return displayEmploymentBlock(item, index);
          })}
        </>
      );
    } else {
      return (
        <span className="text-muted-custom">Employment details not added!</span>
      );
    }
  };

  const jobTitle = (job_title) => {
    if (job_title !== null) {
      return (
        <span className="text-dark-custom text-md-custom fw-bold-custom">
          {job_title}
        </span>
      );
    } else {
      return (
        <span className="text-muted-custom text-md-custom fw-bold-custom">
          Not available!
        </span>
      );
    }
  };

  const employerName = (employer_name) => {
    if (employer_name !== "" && employer_name !== null) {
      return (
        <span className="text-info-custom text-sm-custom fw-medium-custom">
          {employer_name}
        </span>
      );
    } else {
      return (
        <span className="text-muted-custom text-sm-custom fw-medium-custom">
          Employer name not available
        </span>
      );
    }
  };

  const displayDiscription = (discription) => {
    if (discription !== "" && discription !== null) {
      return (
        <span className="text-dark-custom text-sm-custom">{discription}</span>
      );
    }
  };

  const displayLocation = (city, state, country) => {
    return (
      <span className="text-muted-custom text-x-sm-custom">
        {city !== null ? city : ""}
        {state !== null ? ", " + state : ""}
        {country !== null ? ", " + country : ""}
      </span>
    );
  };

  const displayWorkYear = (start, end, is_current) => {
    if (is_current === "1") {
      return (
        <span className="text-dark-custom text-x-x-sm-custom fw-medium-custom">
          From {start !== null ? start : "-"} to&nbsp;{" "}
          <BadgeSuccess title={"Present"} />
        </span>
      );
    } else {
      return (
        <span className="text-dark-custom text-x-x-sm-custom fw-medium-custom">
          From {start !== null ? start : "-"} to {end !== null ? end : "-"}
        </span>
      );
    }
  };

  const displayEmploymentBlock = (employment, key) => {
    return (
      <div key={key} className="col-12 mb-3">
        <div className="card bg-white shadow-sm">
          <div className="card-body">
            <div className="d-block d-md-flex d-xl-flex d-lg-flex row align-items-center">
              {jobTitle(employment.job_title)}
            </div>
            <div className="d-block d-md-flex d-xl-flex d-lg-flex row align-items-center">
              {employerName(employment.employer_name)}
            </div>
            <div className="d-block d-md-flex d-xl-flex d-lg-flex row align-items-center">
              {displayLocation(
                employment.city,
                employment.province,
                employment.country_code
              )}
            </div>
            <div className="d-block d-md-flex d-xl-flex d-lg-flex row align-items-center my-3">
              {displayDiscription(employment.description)}
            </div>

            <div className="d-block d-md-flex d-xl-flex d-lg-flex row align-items-center">
              {displayWorkYear(
                employment.start_date,
                employment.end_date,
                employment.is_current
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div className="d-block">{displayEmploymentHistory()}</div>;
};

export default Employment;
