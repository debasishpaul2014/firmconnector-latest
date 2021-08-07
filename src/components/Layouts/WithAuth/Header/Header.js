import React from "react";
import IconContainer from "../../../Iconcontainer/IconContainer";
import ProfileImageSmall from "../../../CommonComponent/ProfileImageSmall";

import "./header.css";

const Header = () => {
  return (
    <div className="header-dashboard pb-2 pt-2">
      <div className="container d-flex">
        <div className="col-lg-9 col-xl-9 col-xxl-9 align-items-center justify-content-end d-none d-lg-flex d-xl-flex d-xxl-flex">
          <div className="top-search-container d-flex align-items-center shadow">
            <div className="d-block ms-2 me-2">
              <IconContainer iconName={"FiSearch"} color="var(--info-dark)" />
            </div>
            <div className="d-block">
              <span className="text-sm text-muted-light-custom">
                Search here
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-end align-items-center d-lg-flex">
          <div className="sm-block-rounded animated-hover bg-white-custom ms-4">
            <IconContainer iconName={"FiCast"} color="var(--info-dark)" />
          </div>
          <div className="sm-block-rounded animated-hover bg-white-custom ms-4 me-4">
            <IconContainer iconName={"FiBell"} color="var(--info-dark)" />
          </div>
          <div className="sm-block ms-4">
            <ProfileImageSmall />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
