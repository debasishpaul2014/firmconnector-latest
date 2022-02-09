import React from "react";
import { Link } from "react-router-dom";
import ProfileImageMd from "../CommonComponent/ProfileImageMd";

const SearchResultBlock = (props) => {
  const { isSearching, searchResult } = props;

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
    }
  };

  const displayJobRole = (role) => {
    if (role !== null && role.trim().length !== 0) {
      return (
        <div className="d-block">
          <span className="text-x-sm-custom text-dark-custom fw-bold">
            {role}
          </span>
        </div>
      );
    } else {
      return (
        <div className="d-block">
          <span className="text-x-sm-custom text-muted-custom">
            Job role not available
          </span>
        </div>
      );
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
                  <div class="d-flex">
                    <div className="d-block mt-1">
                      <ProfileImageMd imgSrc={item.profile_image_path} />
                    </div>
                    <div className="d-block ms-2">
                      <div className="d-block">
                        <span className="text-md-custom fw-bold text-warning">
                          {item.resource_name}
                        </span>
                      </div>
                      {displayJobRole(item.user_profile_role)}
                    </div>
                  </div>

                  <div className="d-block mt-4">
                    <div className="d-flex flex-wrap">
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
