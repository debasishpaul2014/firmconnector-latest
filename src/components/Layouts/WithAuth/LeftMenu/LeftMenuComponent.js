import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoutButtonComponent from "./LogoutButtonComponent";
import IconContainer from "../../../Iconcontainer/IconContainer";
import { useLocation } from "react-router-dom";

import "./leftmenu.css";

const LeftMenuComponent = () => {
  const location = useLocation();
  const routeName = location.pathname;
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(routeName);
  }, [routeName]);

  return (
    <div className="left-menu-wrapper px-2 shadow-lg justify-content-center">
      <div className="left-menu-nav-wrapper justify-content-center">
        <div className="align-items-center d-flex flex-column align-items-center">
          <div className="sm-block animated-hover bg-muted-custom mt-2 mb-5">
            <IconContainer
              iconName={"FiMoreHorizontal"}
              color="var(--warning)"
            />
          </div>
        </div>

        <Link to="/dashboard">
          <div className="my-3 align-items-center d-flex flex-column align-items-center">
            <div className="sm-block animated-hover bg-muted-custom">
              <IconContainer
                iconName={"FiAirplay"}
                color={
                  activeRoute === "/dashboard"
                    ? "var(--black)"
                    : "var(--muted-light)"
                }
              />
            </div>
            <div>
              <span
                className={
                  activeRoute === "/dashboard"
                    ? "text-x-x-sm-custom text-info-custom fw-bold"
                    : "text-x-x-sm-custom"
                }
              >
                Dashboard
              </span>
            </div>
          </div>
        </Link>

        {/* <div className="my-3 align-items-center d-flex flex-column align-items-center">
          <div className="sm-block animated-hover bg-muted-custom">
            <IconContainer iconName={"FiActivity"} color="var(--muted-light)" />
          </div>
          <div>
            <span className="text-x-x-sm-custom">Activity</span>
          </div>
        </div> */}

        {/* <div className="my-3 align-items-center d-flex flex-column align-items-center">
          <div className="sm-block animated-hover bg-muted-custom">
            <IconContainer iconName={"FiCompass"} color="var(--muted-light)" />
          </div>
          <div>
            <span className="text-x-x-sm-custom">Explore</span>
          </div>
        </div> */}

        <Link to="/resources">
          <div className="my-3 align-items-center d-flex flex-column align-items-center">
            <div className="sm-block animated-hover bg-muted-custom">
              <IconContainer
                iconName={"FiUsers"}
                color={
                  activeRoute === "/resources"
                    ? "var(--black)"
                    : "var(--muted-light)"
                }
              />
            </div>
            <div>
              <span
                className={
                  activeRoute === "/resources"
                    ? "text-x-x-sm-custom text-info-custom fw-bold"
                    : "text-x-x-sm-custom"
                }
              >
                Resources
              </span>
            </div>
          </div>
        </Link>
        {/* <div className="my-3 align-items-center d-flex flex-column align-items-center">
          <div className="sm-block animated-hover bg-muted-custom">
            <IconContainer iconName={"FiZap"} color="var(--muted-light)" />
          </div>
          <div>
            <span className="text-x-x-sm-custom">Jobs</span>
          </div>
        </div> */}

        <Link to="/profile-settings">
          <div className="my-3 align-items-center d-flex flex-column align-items-center">
            <div className="sm-block animated-hover bg-muted-custom">
              <IconContainer
                iconName={"FiSettings"}
                color={
                  activeRoute === "/profile-settings"
                    ? "var(--black)"
                    : "var(--muted-light)"
                }
              />
            </div>
            <div>
              <span
                className={
                  activeRoute === "/profile-settings"
                    ? "text-x-x-sm-custom text-info-custom fw-bold"
                    : "text-x-x-sm-custom"
                }
              >
                Settings
              </span>
            </div>
          </div>
        </Link>

        <LogoutButtonComponent />
      </div>
    </div>
  );
};

export default LeftMenuComponent;
