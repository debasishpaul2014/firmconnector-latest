import React, { useEffect, useState } from "react";
import ButtonSm from "../../Buttons/ButtonSm";
import LoadingPageSm from "../../CommonComponent/LoadingPageSm";

const SkillSet = (props) => {
  const { skillDetails } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [skillDetails]);

  const displayBlockContent = () => {
    if (isLoading) {
      return <LoadingPageSm />;
    } else {
      return renderSkillSet();
    }
  };

  const renderSkillSet = () => {
    if (skillDetails !== null && skillDetails) {
      return (
        <div>
          <div className="skill-holder flex-column mb-3">
            {skillDetails.map((item) => {
              return (
                <div className="skill-wrapper" key={item.skill_id.toString()}>
                  <small className="text-dark fw-medium-custom">
                    {item.skill_name}
                  </small>
                </div>
              );
            })}
          </div>
          {skillDetails.length > 7 ? (
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
      );
    } else {
      return <span className="text-muted">Nothing to display here!</span>;
    }
  };

  return (
    <div className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-3 top-card-section">
      <div className="card-custom h-100">
        <div className="card-body ">
          <div className="d-block mb-3">
            <span className="fw-bold">My Skills</span>
          </div>
          {displayBlockContent()}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
