import React from "react";
import { useAuthContext } from "../../../context/AuthContext";

import FirmBlockSm from "./FirmBlockSm";
import ProfileSection from "./ProfileSection";

const TopProfileSection = () => {
  const { userDetails } = useAuthContext();
  const user_slug = JSON.parse(userDetails).user_slug;

  return (
    <div className="d-sm-flex d-md-flex d-lg-flex d-xlg-flex mb-3 row d-block">
      <ProfileSection user_slug={user_slug} />
      <FirmBlockSm user_slug={user_slug} />
    </div>
  );
};

export default TopProfileSection;
