import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import LoadingPageSm from "../../CommonComponent/LoadingPageSm";
import { AlertInfo } from "../../Alerts/Alert";
import ProfileImageMd from "../../CommonComponent/ProfileImageMd";
import { BadgeSuccess, BadgeInfo } from "../../Badge/Badge";
import { Button } from "react-bootstrap";
import getMyResourceListing from "../../../apis/getMyResourceListing";

const ResourceListingResultBlock = () => {
  const { userDetails } = useAuthContext();
  const user_slug = JSON.parse(userDetails).user_slug;
  const user_primary_role = JSON.parse(userDetails).user_primary_role;
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
                  <div className="d-block d-md-flex d-lg-flex d-xl-flex d-xxl-flex row align-items-center">
                    <div className="col-12 col-lg-1 col-xl-1 col-xxl-1 mb-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                      <Link to={"resources/details/" + item.user_slug}>
                        <ProfileImageMd imgSrc={item.profile_image_path} />
                      </Link>
                    </div>
                    <div className="col-12 col-lg-3 col-xl-4 col-xxl-4 mb-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                      <div className="d-block">
                        <Link to={"resources/details/" + item.user_slug}>
                          {displayName(item.resource_name)}
                        </Link>
                      </div>
                      <div className="d-block mt-2">
                        {displayUserProfileRole(item.user_profile_role)}
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 col-xxl-4 mb-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                      <div className="d-block">
                        <span className="text-md-custom text-info-custom fw-bold-custom">
                          @
                        </span>{" "}
                        <span className="text-muted-custom text-sm-custom">
                          {item.user_email}
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-3 col-xxl-3 d-flex justify-content-end justify-content-lg-end justify-content-xlg-end">
                      <Link to={"resources/details/" + item.user_slug}>
                        <Button variant="warning" size="sm" className="me-2">
                          View Profile
                        </Button>
                      </Link>
                      {user_primary_role === "2" ? (
                        <Link to={"resources/edit-resource/" + item.user_slug}>
                          <Button variant="primary" size="sm" className="ms-2">
                            Edit Profile
                          </Button>
                        </Link>
                      ) : null}
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
      if (user_profile_role.length > 25) {
        let formattedString = user_profile_role.substring(0, 24) + "...";
        return <BadgeSuccess title={formattedString} alt={user_profile_role} />;
      } else {
        return (
          <BadgeSuccess title={user_profile_role} alt={user_profile_role} />
        );
      }
    } else {
      return <BadgeInfo title={"Not available"} />;
    }
  };

  const displayName = (name) => {
    if (name !== null) {
      return (
        <span className="text-dark-custom fw-bold-custom text-sm-custom">
          {name}
        </span>
      );
    } else {
      return <BadgeInfo title={"Not available"} />;
    }
  };

  return <div className="d-block">{displayMainContent()}</div>;
};

export default ResourceListingResultBlock;
