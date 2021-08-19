import React from "react";

const ProfileImageLg = (props) => {
  const { imgSrc } = props;
  return (
    <div className="profile-image-lg-rounder">
      <img className="img-fluid" src={imgSrc} alt="" />
    </div>
  );
};

export default ProfileImageLg;
