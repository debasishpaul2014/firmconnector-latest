import React from "react";
import DocumentBox from "./DocumentBox";
import "./profile.css";

const ResourceProfileBottomSection = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-9 col-xxl-9 mb-3">
        <div className="card-custom h-100 shadow">
          <div className="card-body">
            <div className="profile-tab-container px-3">
              <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
                <span className="fw-medium-custom">About Me</span>
              </div>
              <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
                <span className="fw-medium-custom">Education</span>
              </div>
              <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
                <span className="fw-medium-custom">Experience</span>
              </div>
              <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
                <span className="fw-medium-custom">Current Availability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DocumentBox />
    </div>
  );
};

export default ResourceProfileBottomSection;
