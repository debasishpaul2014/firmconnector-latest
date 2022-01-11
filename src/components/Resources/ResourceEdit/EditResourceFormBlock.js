import AccountLoginDetailsForm from "./AccountLoginDetailsForm";
import ProfileBasicForm from "./ProfileBasicForm";
import ProfileContactForm from "./ProfileContactForm";
import ResourceSkillForm from "./ResourceSkillForm";
import ResourceDocumentForm from "./ResourceDocumentForm";
import ResourceEducationBlock from "./ResourceEducationBlock";

const EditResourceFormBlock = (props) => {
  const { resourceDetails, resourceSlug } = props;

  return (
    <div className="d-block d-lg-flex d-xlg-flex row">
      <div className="col-12 col-lg-8 col-xl-8">
        <div className="d-block row d-lg-flex d-xl-flex mb-4">
          <AccountLoginDetailsForm
            resourceDetails={resourceDetails}
            resourceSlug={resourceSlug}
          />
        </div>
        <div className="d-block row d-lg-flex d-xl-flex mb-4">
          <ProfileBasicForm
            resourceDetails={resourceDetails}
            resourceSlug={resourceSlug}
          />
        </div>
        <div className="d-block row d-lg-flex d-xl-flex mb-4">
          <ProfileContactForm
            resourceDetails={resourceDetails}
            resourceSlug={resourceSlug}
          />
        </div>
        <div className="d-block row d-lg-flex d-xl-flex">
          <ResourceEducationBlock
            education_details={resourceDetails.education_details}
            resourceSlug={resourceSlug}
          />
        </div>
      </div>
      {/* <div className="col-12 col-lg-4 col-xl-4">
        <div className="d-block mb-4">
          <ResourceSkillForm
            resourceDetails={resourceDetails}
            resourceSlug={resourceSlug}
          />
        </div>
        <div className="d-block">
          <ResourceDocumentForm
            resourceDetails={resourceDetails}
            resourceSlug={resourceSlug}
          />
        </div>
      </div> */}
    </div>
  );
};

export default EditResourceFormBlock;
