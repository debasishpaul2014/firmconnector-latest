import React from "react";
import ButtonSm from "../../Buttons/ButtonSm";

const SkillSet = () => {
  const skillData = [
    { id: 1, name: "Java" },
    { id: 2, name: "React Js" },
    { id: 3, name: "React Native" },
    { id: 4, name: "Resource Management" },
    { id: 5, name: "Python" },
    { id: 6, name: "Node Js" },
    { id: 7, name: "SAP Basic" },
  ];

  const renderSkillSet = () => {
    if (skillData.length > 0) {
      return (
        <div className="skill-holder flex-column mb-3">
          {skillData.map((item) => {
            return (
              <div className="skill-wrapper" key={item.id.toString()}>
                <small className="text-dark fw-medium-custom">
                  {item.name}
                </small>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <span>Nothing to display!</span>;
    }
  };

  return (
    <div className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-3 top-card-section">
      <div className="card-custom h-100">
        <div className="card-body ">
          <div className="d-block mb-3">
            <span className="fw-bold">My Skills</span>
          </div>
          {renderSkillSet()}
          {skillData.length > 0 ? (
            <div className="d-flex justify-content-end">
              <ButtonSm
                className="btn-primary-custom"
                role="button"
                title="View All Skills"
                type="button"
                to={"#"}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
