import React from "react";
import ProfileImageLg from "../../CommonComponent/ProfileImageLg";
import user5 from "../../../assets/images/user5.jpg";

const ProfileBrief = () => {
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
            <div className="d-block">
              <span className="h5 fw-bold-custom">Malina Weissman</span>
            </div>
            <div className="d-block">
              <span className="text-muted-custom">Senior Consultant</span>
            </div>
            <div className="d-block">
              <span className="fw-bold">Kolkata, WB, India</span>
            </div>
          </div>
          <div className="d-flex flex-column mt-2 justify-content-center align-items-center">
            <div className="d-block">
              <span className="fw-bold">Profile Highlights</span>
            </div>
          </div>
          <div className="d-flex mt-3">
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 border-end d-flex flex-column justify-content-center align-items-center">
              <div className="d-block">
                <span className="fw-bold-custom h3">5</span>
              </div>
              <div className="d-block">
                <span className=" text-muted-custom">Years</span>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex flex-column justify-content-center align-items-center">
              <div className="d-block">
                <span className="fw-bold-custom h3">14</span>
              </div>
              <div className="d-block">
                <span className=" text-muted-custom">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBrief;
