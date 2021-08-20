import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

import SkillSet from "./SkillSet";
import "./profile.css";

const ResourceProfileBottomSection = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="row">
      <div className="col-12 col-xl-9 col-xxl-9 mb-3">
        <div className="card-custom h-100 shadow">
          <div className="card-body">
            <div className="profile-tab-container overflow-scroll px-3">
              <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
                <span className="fw-medium-custom">Overview</span>
              </div>
              <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
                <span className="fw-medium-custom">Education</span>
              </div>
              <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
                <span className="fw-medium-custom">Experience</span>
              </div>
              <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
                <span className="fw-medium-custom">Availability Forecast</span>
              </div>
              <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
                <span className="fw-medium-custom">Current Availability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SkillSet />
    </div>
  );
};

export default ResourceProfileBottomSection;
