import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import getUserProfileDetails from "../../../apis/getUserProfileDetails";
import ProfileImageLg from "../../CommonComponent/ProfileImageLg";
import { BadgeSuccess } from "../../Badge/Badge";
import ImageIconSmHolder from "../../Iconcontainer/ImageIconSmHolder";
import manager from "../../../assets/images/manager.svg";
import resources from "../../../assets/images/resources.svg";

const ActivityCountComponent = () => {
  const { userDetails } = useAuthContext();
  const user_slug = JSON.parse(userDetails).user_slug;

  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [profileDetails, setProfileDetails] = useState(false);

  useEffect(() => {
    Promise.all([getUserProfileDetails(user_slug)])
      .then(async ([data]) => {
        if (data?.data?.profileDetails) {
          setIsProfileLoading(false);
          setProfileDetails(data?.data?.profileDetails);
        } else {
          setIsProfileLoading(false);
        }
      })
      .catch((err) => {
        setIsProfileLoading(false);
        console.log(err);
      });
  });

  const displayMainContent = () => {
    if (isProfileLoading === true) {
      return displayTopContentLoading();
    } else {
      return displayTopContent();
    }
  };

  const displayTopContentLoading = () => {
    return (
      <div className="d-flex flex-column w-100 justify-content-center align-items-center">
        <span>Loading profile information...</span>
      </div>
    );
  };
  const displayTopContent = () => {
    return (
      <div className="d-block d-lg-flex d-xlg-flex align-items-center">
        <div className="me-3 mb-2 mb-lg-0 mb-xlg-0">
          <ProfileImageLg imgSrc={profileDetails.profile_image_path} />
        </div>
        <div className="d-block d-lg-flex d-xl-flex align-items-center">
          <div className="d-block">
            <span className="h4">
              {profileDetails.first_name} {profileDetails.last_name}
            </span>
            <div className="d-block">
              <span className="text-info text-x-sm-custom">
                {profileDetails.user_email}
              </span>
            </div>
            <div className="d-block mt-1">
              <BadgeSuccess title={profileDetails.user_role_title} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex mb-3 row">
      <div className="col-12 col-md-4 col-lg-3 col-xlg-3 mb-3 m-md-0 m-lg-0 m-xlg-0">
        <div className="card-custom p-3">
          <div className="card-body">
            <img src="..." class="card-img-top" alt="..." />
            <h6>Tata Motors</h6>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-3 col-xlg-3 mb-3 m-md-0 m-lg-0 m-xlg-0">
        <div className="card-custom p-3">
          <div className="card-body">
            <div className="info-icon-holder">
              <ImageIconSmHolder imageUrl={resources} />
            </div>
            <h6>Resources</h6>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-3 col-xlg-3 mb-3 m-md-0 m-lg-0 m-xlg-0">
        <div className="card-custom p-3">
          <div className="card-body">
            <div className="info-icon-holder">
              <ImageIconSmHolder imageUrl={manager} />
            </div>
            <h6>Resource Manager</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCountComponent;
