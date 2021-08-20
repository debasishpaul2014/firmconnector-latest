import React from "react";

import DocumentBox from "./DocumentBox";
import ProfileBrief from "./ProfileBrief";
import GeneralInfo from "./GeneralInfo";

import "./profile.css";

const ResourceProfileTopSection = () => {
  return (
    <div className="row">
      <ProfileBrief />
      <GeneralInfo />
      <DocumentBox />
    </div>
  );
};

export default ResourceProfileTopSection;
