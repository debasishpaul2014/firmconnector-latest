import React from "react";
import ProfileImageSmall from "../../../CommonComponent/ProfileImageSmall";
import { useAuthContext } from "../../../../context/AuthContext";
import IconContainer from "../../../Iconcontainer/IconContainer";

import "./header.css";

const Header = () => {
  const { userDetails } = useAuthContext();
  const loggedinUserDetails = JSON.parse(userDetails);

  return (
    <div className="header-dashboard pb-2 pt-2">
      <div className="container d-flex">
        <div className="col-6 d-flex align-items-center">
          <div
            className="sm-block animated-hover"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <IconContainer
              iconName={"FiMoreHorizontal"}
              color="var(--warning)"
            />
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center">
          <div>
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
