import React from "react";
import IconContainer from "../../../Iconcontainer/IconContainer";
import ProfileImageSmall from "../../../CommonComponent/ProfileImageSmall";
import { useAuthContext } from "../../../../context/AuthContext";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  const { userDetails } = useAuthContext();
  const loggedinUserDetails = JSON.parse(userDetails);

  return (
    <div className="header-dashboard pb-2 pt-2">
      <div className="container d-flex">
        <Link
          to="/search"
          target="_blank"
          className="col-lg-9 col-xl-9 col-xxl-9 align-items-center justify-content-end d-none d-lg-flex d-xl-flex d-xxl-flex"
        >
          <div className="top-search-container d-flex align-items-center shadow">
            <div className="d-block ms-2 me-2">
              <IconContainer iconName={"FiSearch"} color="var(--info-dark)" />
            </div>
            <div className="d-block">
              <span className="text-sm text-muted-custom">Search here</span>
            </div>
          </div>
        </Link>
        <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-end align-items-center d-lg-flex">
          <div className="icon-holder-sm cursor-pointer icon-holder-white ms-4">
            <IconContainer iconName={"FiCast"} color="var(--info-dark)" />
          </div>
          <div className="icon-holder-sm cursor-pointer icon-holder-white ms-4 me-4">
            <IconContainer iconName={"FiBell"} color="var(--info-dark)" />
          </div>
          <div className="ms-4">
            <ProfileImageSmall
              imgSrc={loggedinUserDetails.profile_image_path}
              linkUrl={"/profile-settings"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
