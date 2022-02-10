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

const SearchResultBlock = (props) => {
  const { isSearching, searchResult, ownFirm, accessFirm } = props;

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
              {item.user_street_address}, {item.city_name}, {item.state_name},{" "}
              {item.country_name}
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

  const displaySearchResult = () => {
    if (searchResult) {
      return (
        <>
          {searchResult.map((item, index) => {
            return (
              <Link to={"resources/details/" + item.user_slug}>
                <div
                  key={index.toString()}
                  className="d-block p-3 rounded mb-2 border bg-white"
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
                    <div className="col-12 col-lg-2 col-xl-2 col-xxl-2"></div>
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
