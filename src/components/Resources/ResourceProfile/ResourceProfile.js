import React, { useState, useEffect } from "react";
import ResourceProfileTopSection from "./ResourceProfileTopSection";
import ResourceProfileBottomSection from "./ResourceProfileBottomSection";
import LoadingPageSm from "../../CommonComponent/LoadingPageSm";
import { useAuthContext } from "../../../context/AuthContext";

import getResourceDetails from "../../../apis/getResourceDetails";

const ResourceProfile = (props) => {
  const { resourceSlug } = props;
  const { userDetails } = useAuthContext();
  const user_slug = JSON.parse(userDetails).user_slug;

  const [displayView, setDisplayView] = useState("default");
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [resourceDetails, setResourceDetails] = useState(false);

  useEffect(() => {
    if (user_slug !== undefined && resourceSlug !== undefined) {
      Promise.all([getResourceDetails(resourceSlug, user_slug)])
        .then(async ([data]) => {
          if (data?.data?.resource_details) {
            setIsProfileLoading(false);
            setResourceDetails(data?.data?.resource_details);
          } else {
            setIsProfileLoading(false);
          }
        })
        .catch((err) => {
          setIsProfileLoading(false);
          console.log(err);
        });
    }
  }, [user_slug, resourceSlug]);

  const changeView = async (type) => {
    await setDisplayView(type);
  };

  const displayPageContent = () => {
    if (isProfileLoading) {
      return <LoadingPageSm title={"Loading resource details..."} />;
    } else {
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
          <ResourceProfileTopSection
            displayView={displayView}
            resourceDetails={resourceDetails}
          />
          <ResourceProfileBottomSection
            displayView={displayView}
            resourceDetails={resourceDetails}
          />
        </div>
      );
    }
  };

  return displayPageContent();
};

export default ResourceProfile;
