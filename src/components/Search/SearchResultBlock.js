import React from "react";
import { Link } from "react-router-dom";
import ProfileImageMd from "../CommonComponent/ProfileImageMd";

const SearchResultBlock = (props) => {
  const { isSearching, searchResult } = props;

  const checkSearchStatus = () => {
    if (isSearching) {
      return (
        <div className="d-flex justify-content-center">
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
    }
  };

  const displaySearchResult = () => {
    if (searchResult) {
      return (
        <>
          {searchResult.map((item, index) => {
            return (
              <div
                key={index.toString()}
                className="d-block p-3 rounded my-2 border"
              >
                <div class="d-flex">
                  <Link to={"resources/details/" + item.user_slug}>
                    <div className="d-block mt-1">
                      <ProfileImageMd imgSrc={item.profile_image_path} />
                    </div>
                  </Link>
                  <div className="d-block ms-2">
                    <Link to={"resources/details/" + item.user_slug}>
                      <div className="d-block">
                        <span className="text-md-custom fw-bold text-warning">
                          {item.resource_name}
                        </span>
                      </div>
                    </Link>
                    {displayJobRole(item.user_profile_role)}
                  </div>
                </div>

                <div className="d-block mt-4">
                  <div className="d-flex flex-wrap">
                    {displaySkills(item.skill_name)}
                  </div>
                </div>
              </div>
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
      <>
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
      </>
    );
  };

  return (
    <div className="d-block mx-1">
      <div className="card-custom">
        <div className="card-body">{checkSearchStatus()}</div>
      </div>
    </div>
  );
};

export default SearchResultBlock;
