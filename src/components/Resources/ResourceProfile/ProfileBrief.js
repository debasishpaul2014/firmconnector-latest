import React from "react";
import ProfileImageLg from "../../CommonComponent/ProfileImageLg";
import user5 from "../../../assets/images/user5.jpg";
import user from "../../../assets/images/user.png";

const ProfileBrief = (props) => {
  const displayView = props.displayView;

  const profileBio = `Technology resumes are your ticket to nabbing the most
  sought-after tech jobs. No matter what level you're at in your
  career—entry, mid-level`;

  const displayProfileBio = () => {
    if (profileBio.length > 100) {
      return (
        <div className="text-center">
          {profileBio.substr(0, 100) + "..."}{" "}
          <span className="text-info fw-bold cursor-pointer">See More</span>
        </div>
      );
    } else {
      return (
        <div>
          <span className="text-center">{profileBio}</span>
        </div>
      );
    }
  };

  return (
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-3 top-card-section">
      <div className="card-custom h-100 d-flex flex-column align-items-center shadow">
        <div className="card-body row w-100">
          <div className="profile-img-lg-holder">
            <div className="profile-img-lg">
              <ProfileImageLg
                imgSrc={displayView === "default" ? user5 : user}
              />
            </div>
          </div>

          <div className="d-flex flex-column mb-3 justify-content-center align-items-center">
            <div className="profile-name-lg-holder">
              {displayView === "default" ? (
                <span className="h5 fw-bold-custom">Malina Weissman</span>
              ) : null}
            </div>

            <div className="role-lg-holder">
              {displayView === "default" ? (
                <span className="text-muted-custom">Senior Consultant</span>
              ) : (
                <span className="h5 fw-bold-custom">Senior Consultant</span>
              )}
            </div>

            <div className="address-lg-holder">
              <span className="fw-bold">Kolkata, WB, India</span>
            </div>
          </div>

          <div className="profile-bio-lg-holder">{displayProfileBio()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBrief;
