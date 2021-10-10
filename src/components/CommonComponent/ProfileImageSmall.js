import React from "react";
import { Link } from "react-router-dom";

const ProfileImageSmall = (props) => {
  const { linkUrl, imgSrc } = props;

  return (
    <Link to={linkUrl}>
      <div className="profile-image-sm-rounded">
        <img className="img-fluid" src={imgSrc} alt="" />
      </div>
    </Link>
  );
};

export default ProfileImageSmall;
