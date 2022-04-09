import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrgChart = (props) => {
  const { user_slug } = props;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3 mb-md-2 mb-lg-0 mb-xlg-0 ">
      <div className="card-custom p-3 profile-static-card">
        <div className="card-body justify-content-around align-items-center d-flex flex-column">
          <Link to={"display-org-chart"}>
            <Button variant="success" size="sm" className="me-2">
              ORG CHART
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OrgChart);
