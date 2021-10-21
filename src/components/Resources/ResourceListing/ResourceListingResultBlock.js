import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import LoadingPageSm from "../../CommonComponent/LoadingPageSm";
import { AlertInfo } from "../../Alerts/Alert";
import ProfileImageMd from "../../CommonComponent/ProfileImageMd";

import getMyResourceListing from "../../../apis/getMyResourceListing";

const ResourceListingResultBlock = () => {
  const { userDetails } = useAuthContext();
  const user_slug = JSON.parse(userDetails).user_slug;
  const [isLoading, setIsLoading] = useState(true);
  const [resourceListing, setResourceListing] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [emptyResult, setEmptyResult] = useState("");

  useEffect(() => {
    if (user_slug !== undefined) {
      getResourceListing();
    }
  }, [user_slug]);

  const getResourceListing = () => {
    Promise.all([getMyResourceListing(user_slug)])
      .then(async ([data]) => {
        if (data?.data?.status === 1) {
          if (data?.data?.resourceList) {
            setResourceListing(data?.data?.resourceList);
            setIsLoading(false);
            setHasResult(true);
          } else {
            setIsLoading(false);
            setEmptyResult("No resource result found for your account access.");
          }
        } else {
          setIsLoading(false);
          setHasResult(false);
          setEmptyResult(data?.data?.message);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setEmptyResult(false);
        console.log(err);
      });
  };

  const displayMainContent = () => {
    if (isLoading === true) {
      return displayLoadingBlock();
    } else {
      return displayResourceListing();
    }
  };

  const displayLoadingBlock = () => {
    return <LoadingPageSm title={"Loading firm details..."} />;
  };

  const displayResourceListing = () => {
    if (!hasResult) {
      return <AlertInfo title={"Note"} message={emptyResult} />;
    } else {
      return displayList();
    }
  };

  const displayList = () => {
    return (
      <>
        {resourceListing.map((item, index) => {
          return (
            <div key={index.toString()} className="d-block mb-4">
              <div className="card-custom bg-white">
                <div className="card-body">
                  <div className="d-block d-md-flex d-xl-flex d-lg-flex row align-items-center">
                    <div className="col-12 col-md-2 col-lg-1 col-xl-1">
                      <ProfileImageMd imgSrc={item.profile_image_path} />
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 col-xl-2">
                      <div className="d-block">
                        <span className="text-dark-custom fw-medium-custom">
                          {item.first_name} {item.last_name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return <div className="d-block">{displayMainContent()}</div>;
};

export default ResourceListingResultBlock;
