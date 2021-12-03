import React, { useEffect, useState } from "react";
import ProfileImageLg from "../../CommonComponent/ProfileImageLg";
import user from "../../../assets/images/user.png";
import LoadingPageSm from "../../CommonComponent/LoadingPageSm";

const ProfileBrief = (props) => {
  const { displayView, profileDetails } = props;
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  useEffect(() => {
    setIsProfileLoading(false);
  }, [profileDetails]);

  const displayProfileBio = () => {
    if (profileDetails.profile_bio !== null) {
      if (profileDetails.profile_bio.length > 100) {
        return (
          <div className="text-center">
            {profileDetails.profile_bio.substr(0, 100) + "..."}{" "}
            <span className="text-info fw-bold cursor-pointer">See More</span>
          </div>
        );
      } else {
        return (
          <div>
            <span className="text-center">{profileDetails.profile_bio}</span>
          </div>
        );
      }
    } else {
      return (
        <div>
          <span className="text-center">Nothing added to bio!</span>
        </div>
      );
    }
  };

  const displayProfileName = () => {
    if (
      profileDetails.profile_name !== null &&
      profileDetails.profile_name !== ""
    ) {
      return profileDetails.profile_name;
    } else {
      return <span className="text-muted">No name</span>;
    }
  };

  const displayBlockContent = () => {
    if (isProfileLoading) {
      return <LoadingPageSm />;
    } else {
      return (
        <div>
          <div className="profile-img-lg-holder">
            <div className="profile-img-lg">
              <ProfileImageLg
                imgSrc={
                  displayView === "default"
                    ? profileDetails.profile_image_path
                    : user
                }
              />
            </div>
          </div>

          <div className="d-flex flex-column mb-3 justify-content-center align-items-center">
            <div className="profile-name-lg-holder">
              {displayView === "default" ? (
                <span className="h5 fw-bold-custom">
                  {displayProfileName()}
                </span>
              ) : null}
            </div>

            <div className="role-lg-holder">
              {displayView === "default" ? (
                <span className="text-muted-custom">
                  {profileDetails.user_profile_role}
                </span>
              ) : (
                <span className="h5 fw-bold-custom">
                  {profileDetails.user_profile_role}
                </span>
              )}
            </div>

            <div className="address-lg-holder">
              <span className="fw-bold">Kolkata, WB, India</span>
            </div>
          </div>

          <div className="profile-bio-lg-holder">{displayProfileBio()}</div>
        </div>
      );
    }
  };

  return (
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-3 top-card-section">
      <div className="card-custom h-100 d-flex flex-column align-items-center shadow">
        <div className="card-body row w-100">{displayBlockContent()}</div>
      </div>
    </div>
  );
};

export default ProfileBrief;
