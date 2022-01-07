import React from "react";
import ProfileBasicForm from "./ProfileBasicForm";

const EditFirmFormBlock = (props) => {
  const { firmDetails, userSlug } = props;

  return (
    <div className="d-block d-lg-flex d-xlg-flex row">
      <div className="col-12 col-lg-8 col-xl-8">
        <div className="d-block row d-lg-flex d-xl-flex mb-4">
          <ProfileBasicForm firmDetails={firmDetails} userSlug={userSlug} />
        </div>
      </div>
    </div>
  );
};

export default EditFirmFormBlock;
