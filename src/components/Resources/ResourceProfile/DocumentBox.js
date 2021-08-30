import React from "react";
import DocumentHolderSm from "./DocumentHolderSm";
import ButtonSm from "../../Buttons/ButtonSm";

const DocumentBox = () => {
  return (
    <div className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-3 docuament-box-holder">
      <div className="card-custom h-100">
        <div className="card-body ">
          <div className="d-block mb-3">
            <span className="fw-bold">Files / Documents</span>
          </div>

          <div className="document-holder-inner mb-3">
            <DocumentHolderSm title={"Job Resume.pdf"} />
            <DocumentHolderSm title={"Oracel Certificate.pdf"} />
            <DocumentHolderSm title={"SAP Certification.pdf"} />
            <DocumentHolderSm title={"AWS Cloud Certification.pdf"} />
          </div>

          <div className="d-flex justify-content-end">
            <ButtonSm
              className="btn-primary-custom"
              role="button"
              title="View All"
              type="button"
              to={"#"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentBox;
