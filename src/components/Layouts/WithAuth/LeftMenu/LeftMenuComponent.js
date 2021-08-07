import React from "react";
import IconContainer from "../../../Iconcontainer/IconContainer";

import "./leftmenu.css";

const LeftMenuComponent = () => {
  return (
    <div className="left-menu-wrapper px-2 px-lg-4 px-xl-4 px-xxl-4 shadow-lg">
      <div className="left-menu-nav-wrapper">
        <div className="sm-block animated-hover bg-muted-custom mt-2 mb-5">
          <IconContainer iconName={"FiMoreHorizontal"} color="var(--warning)" />
        </div>
        <div className="sm-block animated-hover bg-muted-custom my-4">
          <IconContainer iconName={"FiAirplay"} color="var(--black)" />
        </div>
        <div className="sm-block animated-hover bg-muted-custom my-4">
          <IconContainer iconName={"FiActivity"} color="var(--muted-light)" />
        </div>
        <div className="sm-block animated-hover bg-muted-custom my-4">
          <IconContainer iconName={"FiCompass"} color="var(--muted-light)" />
        </div>
        <div className="sm-block animated-hover bg-muted-custom my-4">
          <IconContainer iconName={"FiUsers"} color="var(--muted-light)" />
        </div>
        <div className="sm-block animated-hover bg-muted-custom my-4">
          <IconContainer iconName={"FiZap"} color="var(--muted-light)" />
        </div>
        <div className="sm-block animated-hover bg-muted-custom my-4">
          <IconContainer iconName={"FiSettings"} color="var(--muted-light)" />
        </div>
      </div>
    </div>
  );
};

export default LeftMenuComponent;
