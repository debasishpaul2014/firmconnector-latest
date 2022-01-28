import React from "react";
import { ASSETS_BASE } from "../../config/env";

const ProfileImageMd = (props) => {
  const { imgSrc } = props;
  return (
    <div className="profile-image-md">
      <img className="img-fluid" src={ASSETS_BASE + imgSrc} alt="" />
    </div>
  );
};

export default ProfileImageMd;
