import React from "react";

const ProfileInfoTabSection = (props) => {
  const displayView = props.displayView;

  return (
    <div className="col-12 col-xl-9 col-xxl-9 mb-3 profile-tab-section">
      <div className="card-custom h-100 shadow">
        <div className="card-body">
          <div className="profile-tab-container px-3">
            <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
              <span className="fw-medium-custom">About Me</span>
            </div>
            {displayView === "default" ? (
              <>
                <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
                  <span className="fw-medium-custom">Education</span>
                </div>
                <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
                  <span className="fw-medium-custom">Experience</span>
                </div>
              </>
            ) : null}

            <div className="profile-tab shadow-sm cursor-pointer my-2 mx-2">
              <span className="fw-medium-custom">Current Availability</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoTabSection;
