import React from "react";

import ProfileBrief from "./ProfileBrief";
import GeneralInfo from "./GeneralInfo";
import SkillSet from "./SkillSet";

import "./profile.css";

const ResourceProfileTopSection = (props) => {
  const displayView = props.displayView;

  return (
    <div className="row">
      <ProfileBrief displayView={displayView} />
      <GeneralInfo displayView={displayView} />
      <SkillSet />
    </div>
  );
};

export default ResourceProfileTopSection;
