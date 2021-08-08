import React from "react";

const ProfileImageSmall = (props) => {
  const { imgSrc } = props;
  return (
    <div className="profile-image-sm">
      <img className="img-fluid" src={imgSrc} alt="" />
    </div>
  );
};

export default ProfileImageSmall;
