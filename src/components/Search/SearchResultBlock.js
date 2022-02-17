import React from "react";
import { Link } from "react-router-dom";
import ProfileImageMd from "../CommonComponent/ProfileImageMd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import user from "../../assets/images/no-photo.png";
import { FIRM_IMAGE_BASE } from "../../config/env";
import { PieChart } from "react-minimal-pie-chart";

const SearchResultBlock = (props) => {
  const { isSearching, searchResult, ownFirm } = props;

  const checkSearchStatus = () => {
    if (isSearching) {
      return (
        <div className="d-flex justify-content-center align-items-center p-3 bg-white">
          <span className="text-sm-custom">Searching, please wait...</span>
        </div>
      );
    } else {
      return displaySearchResult();
    }
  };

  const displaySkills = (skills) => {
    if (skills.length > 0 && skills !== null) {
      const skillArray = skills.split(",");
      const skillLength = skillArray.length;

      if (skillLength > 10) {
        const remainingSkills = skillLength - 10;
        const skillFormatted = skillArray.slice(0, 10);

        return (
          <>
            {skillFormatted.map((skillItem, skillIndex) => {
              return (
                <div class="skill-wrapper-muted my-1 me-1">
                  <span class="text-x-sm-custom" key={skillIndex.toString()}>
                    {skillItem}
                  </span>
                </div>
              );
            })}
            <span className=" my-2 me-1 text-x-sm-custom fw-bold text-dark-custom">
              +{remainingSkills} more skills
            </span>
          </>
        );
      } else {
        return (
          <>
            {skillArray.map((skillItem, skillIndex) => {
              return (
                <div class="skill-wrapper-muted my-1 me-1">
                  <span class="text-x-sm-custom" key={skillIndex.toString()}>
                    {skillItem}
                  </span>
                </div>
              );
            })}
          </>
        );
      }
    } else {
      return (
        <span className="text-x-sm-custom text-danger-custom">
          No skills available!
        </span>
      );
    }
  };

  const displayJobRole = (role) => {
    if (role !== null && role.trim().length !== 0) {
      return (
        <div className="d-block">
          <span className="text-x-sm-custom text-info-custom fw-bold">
            Job Role:
          </span>
          <span className="text-x-sm-custom text-dark-custom fw-bold">
            &nbsp;{role}
          </span>
        </div>
      );
    }
  };

  const displayProfilePicture = (item) => {
    if (ownFirm !== "" && ownFirm !== undefined) {
      if (ownFirm.firm_id === item.firm_id) {
        return (
          <div className="d-block">
            <ProfileImageMd imgSrc={item.profile_image_path} />
          </div>
        );
      } else {
        return (
          <div className="profile-image-md">
            <img className="img-fluid" src={user} alt="" />
          </div>
        );
      }
    }
  };

  const displayProfileName = (item) => {
    if (ownFirm !== "" && ownFirm !== undefined) {
      if (ownFirm.firm_id === item.firm_id) {
        return (
          <div className="d-block">
            <span className="h6 fw-bold-custom text-warning-custom">
              {item.resource_name}
            </span>
          </div>
        );
      } else {
        return (
          <div className="d-block">
            <span className="h6 fw-bold-custom text-muted-light-custom">
              Name not available
            </span>
          </div>
        );
      }
    } else {
      return (
        <div className="d-block">
          <span className="h6 fw-bold-custom text-muted-light-custom">
            Name not available
          </span>
        </div>
      );
    }
  };

  const displayLocation = (item) => {
    if (ownFirm !== "" && ownFirm !== undefined) {
      if (ownFirm.firm_id === item.firm_id) {
        return (
          <div className="d-flex align-items-center">
            <span className="text-info-custom me-3">
              <FontAwesomeIcon icon={faMapPin} />
            </span>
            <span className="text-x-sm-custom text-dark-custom">
              {item.city_name}, {item.state_name}, {item.country_name}
            </span>
          </div>
        );
      }
    }
  };

  const displayEmail = (item) => {
    if (ownFirm !== "" && ownFirm !== undefined) {
      if (ownFirm.firm_id === item.firm_id) {
        return (
          <div className="d-flex align-items-center">
            <span className="text-info-custom me-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="text-x-sm-custom text-dark-custom">
              {item.user_email}
            </span>
          </div>
        );
      }
    }
  };

  const displayPhone = (item) => {
    if (ownFirm !== "" && ownFirm !== undefined) {
      if (ownFirm.firm_id === item.firm_id) {
        return (
          <div className="d-flex align-items-center">
            <span className="text-info-custom me-2">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span className="text-x-sm-custom text-dark-custom">
              {item.user_phone}
            </span>
          </div>
        );
      }
    }
  };

  const displayAvailability = (availability) => {
    return (
      <>
        {displayAvailabilityGraph(availability)}
        <div className="d-block">
          <span className="text-x-x-sm-custom fw-medium-custom text-dark-custom">
            {availability} hrs/week
          </span>
        </div>
      </>
    );
  };

  const displayAvailabilityGraph = (availability) => {
    if (availability !== null) {
      availability = parseInt(availability);

      var color = "#DC143C";

      if (availability < 20) {
        color = "#DC143C";
      } else if (availability === 20 || availability === 30) {
        color = "#808000";
      } else {
        color = "#00d09c";
      }

      return (
        <div className="chart-box-md">
          <PieChart
            animate={true}
            animationDuration={500}
            animationEasing="ease-out"
            center={[25, 25]}
            totalValue={40}
            data={[
              {
                color: color,
                value: availability,
              },
            ]}
            labelPosition={25}
            lengthAngle={360}
            lineWidth={30}
            paddingAngle={0}
            radius={25}
            startAngle={0}
            viewBoxSize={[50, 50]}
            background={"#ccc"}
          />
        </div>
      );
    } else {
      availability = 0;

      return (
        <div className="chart-box-md">
          <PieChart
            animate={true}
            animationDuration={500}
            animationEasing="ease-out"
            center={[50, 50]}
            totalValue={40}
            data={[
              {
                color: color,
                value: availability,
              },
            ]}
            labelPosition={50}
            lengthAngle={360}
            lineWidth={30}
            paddingAngle={0}
            radius={50}
            startAngle={0}
            viewBoxSize={[50, 50]}
            background={"#ccc"}
          />
        </div>
      );
    }
  };

  const displayFirm = (logo_path) => {
    return (
      <div className="firm-logo-sm-custom shadow-sm">
        <img
          src={FIRM_IMAGE_BASE + logo_path}
          className="img-fluid"
          alt="..."
        />
      </div>
    );
  };

  const displaySearchResult = () => {
    if (searchResult) {
      return (
        <>
          {searchResult.map((item, index) => {
            return (
              <Link target="_blank" to={"resources/details/" + item.user_slug}>
                <div
                  key={index.toString()}
                  className="d-block p-3 rounded mb-2 bg-white shadow"
                >
                  <div class="d-flex row">
                    <div className="col-12 col-lg-1 col-xl-1 col-xxl-1">
                      {displayProfilePicture(item)}
                    </div>
                    <div className="col-12 col-lg-9 col-xl-9 col-xxl-9">
                      <div className="d-block">
                        {displayProfileName(item)}
                        {displayJobRole(item.user_profile_role)}
                        <div className="d-block mt-1">
                          {displayEmail(item)}
                          {displayPhone(item)}
                          {displayLocation(item)}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-xl-2 col-xxl-2 d-flex flex-column my-2 my-lg-0 my-xl-0 my-xxl-0 justify-content-center align-items-xxl-end align-items-lg-end align-items-xl-end">
                      {displayAvailability(item.availability)}
                      <div className="d-block my-2">
                        {displayFirm(item.firm_logo)}
                      </div>
                    </div>
                  </div>

                  <div className="d-block mt-2">
                    <div className="d-block mb-1">
                      <span className="text-x-sm-custom fw-bold text-muted-custom">
                        My Skills
                      </span>
                    </div>
                    <div className="d-flex flex-wrap p-2 bg-light">
                      {displaySkills(item.skill_name)}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </>
      );
    } else {
      return displayInitialStatus();
    }
  };

  const displayInitialStatus = () => {
    return (
      <div className="d-block bg-light p-3">
        <div className="d-flex justify-content-center">
          <span className="fw-bold text-sm-custom">
            Search result will appear here
          </span>
        </div>
        <div className="d-flex justify-content-center">
          <span className="text-x-sm-custom text-success-custom">
            Type keyword for skills, resources, city, country
          </span>
        </div>
      </div>
    );
  };

  return <div className="d-block mx-1">{checkSearchStatus()}</div>;
};

export default SearchResultBlock;
