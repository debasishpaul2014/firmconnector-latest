import React from "react";

import ProfileBrief from "./ProfileBrief";
import GeneralInfo from "./GeneralInfo";
import SkillSet from "./SkillSet";

import "./profile.css";

const ResourceProfileTopSection = (props) => {
  const { displayView, resourceDetails } = props;

  return (
    <div className="row">
      <ProfileBrief
        displayView={displayView}
        profileDetails={resourceDetails.profile_details}
        contactDetails={resourceDetails.contact_details}
      />
      <GeneralInfo
        displayView={displayView}
        resourceDetails={resourceDetails.profile_details}
        contactDetails={resourceDetails.contact_details}
      />
      <SkillSet skillDetails={resourceDetails.skill_details} />
    </div>
  );
};

export default ResourceProfileTopSection;
