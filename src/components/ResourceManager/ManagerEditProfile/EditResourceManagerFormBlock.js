import React from "react";
import AccountLoginDetailsForm from "./AccountLoginDetailsForm";
import ProfileBasicForm from "./ProfileBasicForm";
import ProfileContactForm from "./ProfileContactForm";

const EditResourceManagerFormBlock = (props) => {
  const { resourceManagerDetails, resourceManagerSlug } = props;

  console.log(resourceManagerDetails);

  return (
    <div className="d-block d-lg-flex d-xl-flex row">
      <div className="col-12 col-lg-8 col-xl-8">
        <div className="d-block row d-lg-flex d-xl-flex mb-4">
          <AccountLoginDetailsForm
            resourceManagerDetails={resourceManagerDetails.login_details}
            resourceManagerSlug={resourceManagerSlug}
          />
        </div>
        <div className="d-block row d-lg-flex d-xl-flex mb-4">
          <ProfileBasicForm
            resourceManagerDetails={resourceManagerDetails.profile_details}
            resourceManagerSlug={resourceManagerSlug}
          />
        </div>
        <div className="d-block row d-lg-flex d-xl-flex">
          <ProfileContactForm
            resourceManagerDetails={resourceManagerDetails.contact_details}
            resourceManagerSlug={resourceManagerSlug}
          />
        </div>
      </div>
    </div>
  );
};

export default EditResourceManagerFormBlock;
