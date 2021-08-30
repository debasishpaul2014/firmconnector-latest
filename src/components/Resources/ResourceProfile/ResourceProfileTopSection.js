import React from "react";

import ProfileBrief from "./ProfileBrief";
import GeneralInfo from "./GeneralInfo";
import SkillSet from "./SkillSet";

import "./profile.css";

const ResourceProfileTopSection = () => {
  return (
    <div className="row">
      <ProfileBrief />
      <GeneralInfo />
      <SkillSet />
    </div>
  );
};

export default ResourceProfileTopSection;
