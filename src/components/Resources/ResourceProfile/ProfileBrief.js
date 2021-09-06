import React from "react";
import ProfileImageLg from "../../CommonComponent/ProfileImageLg";
import user5 from "../../../assets/images/user5.jpg";

const ProfileBrief = (props) => {
  const displayView = props.displayView;

  return (
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-3 top-card-section">
      <div className="card-custom h-100  d-flex flex-column align-items-center ">
        <div className="card-body row w-100">
          <div className="d-flex justify-content-center">
            <div className="profile-img-lg">
              <ProfileImageLg imgSrc={user5} />
            </div>
          </div>

          <div className="d-flex flex-column mt-4 mb-4 justify-content-center align-items-center">
            {displayView === "default" ? (
              <div className="d-block">
                <span className="h5 fw-bold-custom">Malina Weissman</span>
              </div>
            ) : null}

            <div className="d-block">
              <span className="text-muted-custom">Senior Consultant</span>
            </div>
            <div className="d-block">
              <span className="fw-bold">Kolkata, WB, India</span>
            </div>
          </div>
          <div className="d-flex">
            <p className="text-center">
              Technology resumes are your ticket to nabbing the most
              sought-after tech jobs. No matter what level you're at in your
              career—entry, mid-level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBrief;
