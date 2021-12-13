import React from "react";
import DocumentBox from "./DocumentBox";
import ProfileInfoTabSection from "./ProfileInfoTabSection";

const ResourceProfileBottomSection = (props) => {
  const { displayView, resourceDetails } = props;

  return (
    <div className="row">
      <ProfileInfoTabSection
        displayView={displayView}
        profileDetails={resourceDetails.profile_details}
        educationDetails={resourceDetails.education_details}
        employmentDetails={resourceDetails.employment_details}
      />
      {displayView === "default" ? (
        <DocumentBox documentDetails={resourceDetails.document_details} />
      ) : null}
    </div>
  );
};

export default ResourceProfileBottomSection;
