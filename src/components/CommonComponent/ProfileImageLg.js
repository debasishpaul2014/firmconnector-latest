import React from "react";
import { ASSETS_BASE } from "../../config/env";

const ProfileImageLg = (props) => {
  const { imgSrc } = props;
  return (
    <div className="profile-image-lg-rounder">
      <img className="img-fluid" src={ASSETS_BASE + imgSrc} alt="" />
    </div>
  );
};

export default ProfileImageLg;
