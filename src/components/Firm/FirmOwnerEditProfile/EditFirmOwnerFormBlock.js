import React from "react";
import AccountLoginDetailsForm from "./AccountLoginDetailsForm";
import ProfileBasicForm from "./ProfileBasicForm";

const EditFirmOwnerFormBlock = (props) => {
  const { userDetails, userSlug } = props;

  return (
    <div className="d-block d-lg-flex d-xlg-flex row">
      <div className="col-12 col-lg-8 col-xl-8">
        <div className="d-block row d-lg-flex d-xl-flex mb-4">
          <AccountLoginDetailsForm
            userDetails={userDetails.login_details}
            userSlug={userSlug}
          />
        </div>
        <div className="d-block row d-lg-flex d-xl-flex mb-4">
          <ProfileBasicForm
            userDetails={userDetails.profile_details}
            userSlug={userSlug}
          />
        </div>
      </div>
    </div>
  );
};

export default EditFirmOwnerFormBlock;
