import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import LoadingPageSm from "../../CommonComponent/LoadingPageSm";
import { AlertInfo } from "../../Alerts/Alert";
import ProfileImageMd from "../../CommonComponent/ProfileImageMd";
import { BadgeSuccess, BadgeInfo } from "../../Badge/Badge";
import ButtonSm from "../../Buttons/ButtonSm";

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
            <div key={index.toString()} className="d-block mb-3">
              <div className="card-custom bg-white shadow-sm">
                <div className="card-body">
                  <div className="d-block d-md-flex d-xl-flex d-lg-flex row align-items-center">
                    <div className="col-12 col-md-2 col-lg-1 col-xl-1">
                      <ProfileImageMd imgSrc={item.profile_image_path} />
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 col-xl-2">
                      <div className="d-block mb-1">
                        <span className="text-muted-light-custom text-x-sm-custom fw-medium-custom">
                          Name
                        </span>
                      </div>
                      <div className="d-block">
                        {displayName(item.resource_name)}
                      </div>
                    </div>
                    <div className="col-12 col-md-2 col-lg-2 col-xl-2 my-3 my-md-0 my-lg-0 my-xl-0">
                      <div className="d-block mb-0 my-md-1 my-lg-1 my-xl-1">
                        <span className="text-muted-light-custom text-x-sm-custom fw-medium-custom">
                          Resource Role
                        </span>
                      </div>
                      <div className="d-block">
                        {displayUserProfileRole(item.user_profile_role)}
                      </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 col-xl-3 my-3 my-md-0 my-lg-0 my-xl-0">
                      <div className="d-block mb-0">
                        <span className="text-muted-light-custom text-x-sm-custom fw-medium-custom">
                          Contact Email
                        </span>
                      </div>
                      <div className="d-block">
                        <span className="text-dark-custom">
                          {item.user_email}
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 my-3 my-md-0 my-lg-0 my-xl-0 d-flex justify-content-lg-end justify-content-xlg-end">
                      <ButtonSm
                        className="btn-success-custom me-2"
                        role="button"
                        title="View Profile"
                        type="button"
                        to={"resources/details/" + item.user_slug}
                      />
                      <ButtonSm
                        className="btn-primary-custom"
                        role="button"
                        title="Edit Profile"
                        type="button"
                        to={"resources/edit-resource/" + item.user_slug}
                      />
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

  const displayUserProfileRole = (user_profile_role) => {
    if (user_profile_role !== null) {
      if (user_profile_role.length > 20) {
        let formattedString = user_profile_role.substring(0, 19) + "...";
        return <BadgeSuccess title={formattedString} />;
      } else {
        return <BadgeSuccess title={user_profile_role} />;
      }
    } else {
      return <BadgeInfo title={"Not available"} />;
    }
  };

  const displayName = (name) => {
    if (name !== null) {
      return <span className="text-dark-custom fw-bold">{name}</span>;
    } else {
      return <BadgeInfo title={"Not available"} />;
    }
  };

  return <div className="d-block">{displayMainContent()}</div>;
};

export default ResourceListingResultBlock;
