import React from "react";
import DocumentBox from "./DocumentBox";
import ProfileInfoTabSection from "./ProfileInfoTabSection";

const ResourceProfileBottomSection = (props) => {
  const displayView = props.displayView;

  return (
    <div className="row">
      <ProfileInfoTabSection displayView={displayView} />
      {displayView === "default" ? <DocumentBox /> : null}
    </div>
  );
};

export default ResourceProfileBottomSection;
