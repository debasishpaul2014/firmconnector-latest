import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import LoadingPageSm from "../../CommonComponent/LoadingPageSm";

const SkillSet = (props) => {
  const { skillDetails } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            {skillDetails.map((item, key) => {
              return displaySkillItem(item, key);
            })}
          </div>
          {skillDetails.length > 7 ? (
            <div className="d-flex justify-content-end">
              <Button variant="primary" size="sm" onClick={() => handleShow()}>
                View All Skills
              </Button>
            </div>
          ) : null}

          {displaySkillModalContent()}
        </div>
      );
    } else {
      return <span className="text-muted">Nothing to display here!</span>;
    }
  };

  const displaySkillItem = (item, key) => {
    if (key <= 5) {
      return (
        <div className="skill-wrapper my-1" key={item.skill_id.toString()}>
          <span>{item.skill_name}</span>
        </div>
      );
    } else {
      return null;
    }
  };

  const displaySkillModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <div className="d-block">
            <span className="text-sm-custom text-dark-custom fw-bold-custom">
              My Skills
            </span>
          </div>
        </Modal.Header>
        <Modal.Body>{displayAllSkills()}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} size="sm">
            Close Skill
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const displayAllSkills = () => {
    if (skillDetails !== null && skillDetails) {
      return (
        <div className="d-flex flex-wrap">
          {skillDetails.map((item, key) => {
            return (
              <div
                className="skill-wrapper my-1 me-2"
                key={item.skill_id.toString()}
              >
                <span>{item.skill_name}</span>
              </div>
            );
          })}
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
