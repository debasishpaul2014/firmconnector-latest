import React from "react";

const InputLebelComponent = (props) => {
  const { title } = props;

  return (
    <div className="form-input-header">
      <span class="text-sm-custom fw-bold">{title}</span>
    </div>
  );
};

export default InputLebelComponent;
