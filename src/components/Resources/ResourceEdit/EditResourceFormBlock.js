import AccountLoginDetailsForm from "./AccountLoginDetailsForm";
import ProfileBasicForm from "./ProfileBasicForm";
import ProfileContactForm from "./ProfileContactForm";
import ResourceDocumentForm from "./ResourceDocumentForm";
import ResourceEducationBlock from "./ResourceEducationBlock";
import ResourceEmploymentBlock from "./ResourceEmploymentBlock";

const EditResourceFormBlock = (props) => {
  const { resourceDetails, resourceSlug } = props;

  return (
    <div className="d-block d-lg-flex d-xl-flex row">
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
        <div className="d-block row d-lg-flex d-xl-flex mb-4">
          <ResourceEducationBlock
            education_details={resourceDetails.education_details}
            resourceSlug={resourceSlug}
          />
        </div>
        <div className="d-block row d-lg-flex d-xl-flex">
          <ResourceEmploymentBlock
            employment_details={resourceDetails.employment_details}
            resourceSlug={resourceSlug}
          />
        </div>
      </div>
      <div className="col-12 col-lg-4 col-xl-4">
        <div className="d-block">
          <ResourceDocumentForm
            document_details={resourceDetails.document_details}
            resourceSlug={resourceSlug}
          />
        </div>
      </div>
    </div>
  );
};

export default EditResourceFormBlock;
