import React, { useState } from "react";
import ResourceProfileTopSection from "./ResourceProfileTopSection";
import ResourceProfileBottomSection from "./ResourceProfileBottomSection";

const ResourceProfile = () => {
  const [displayView, setDisplayView] = useState("default");

  const changeView = async (type) => {
    await setDisplayView(type);
  };

  return (
    <div>
      <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
        <div className="d-flex">
          <div className="me-2">
            <span
              className="btn btn-primary btn-sm"
              onClick={() => changeView("default")}
            >
              Default View
            </span>
          </div>
          <div>
            <span
              className="btn btn-warning btn-sm"
              onClick={() => changeView("client")}
            >
              Client View
            </span>
          </div>
        </div>
      </div>
      <ResourceProfileTopSection displayView={displayView} />
      <ResourceProfileBottomSection displayView={displayView} />
    </div>
  );
};

export default ResourceProfile;
