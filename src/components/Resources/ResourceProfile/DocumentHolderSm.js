import React from "react";
import IconContainer from "../../Iconcontainer/IconContainer";

const DocumentHolderSm = (props) => {
  const { title } = props;

  return (
    <div className="d-flex shadow-sm p-2 mb-3 cursor-pointer document-box-sm">
      <IconContainer iconName={"FiFileText"} color="var(--black)" />
      <div className="d-block ms-2">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default DocumentHolderSm;
