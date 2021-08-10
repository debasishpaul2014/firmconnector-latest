import React from "react";

const ProfileImageMd = (props) => {
  const { imgSrc } = props;
  return (
    <div className="profile-image-md">
      <img className="img-fluid" src={imgSrc} alt="" />
    </div>
  );
};

export default ProfileImageMd;
