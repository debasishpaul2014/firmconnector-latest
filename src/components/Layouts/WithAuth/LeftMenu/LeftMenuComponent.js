import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoutButtonComponent from "./LogoutButtonComponent";
import IconContainer from "../../../Iconcontainer/IconContainer";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../../../context/AuthContext";

import "./leftmenu.css";

const LeftMenuComponent = () => {
  const { userDetails } = useAuthContext();
  const user_primary_role = JSON.parse(userDetails).user_primary_role;

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

        {user_primary_role === "1" ? (
          <Link to="/resource-managers">
            <div className="my-3 align-items-center d-flex flex-column align-items-center">
              <div className="sm-block animated-hover bg-muted-custom">
                <IconContainer
                  iconName={"FiUsers"}
                  color={
                    activeRoute === "/resource-managers"
                      ? "var(--black)"
                      : "var(--muted-light)"
                  }
                />
              </div>
              <div>
                <span
                  className={
                    activeRoute === "/resource-managers"
                      ? "text-x-x-sm-custom text-info-custom fw-bold"
                      : "text-x-x-sm-custom"
                  }
                >
                  Managers
                </span>
              </div>
            </div>
          </Link>
        ) : null}

        {user_primary_role === "2" ? (
          <Link to="/clients">
            <div className="my-3 align-items-center d-flex flex-column align-items-center">
              <div className="sm-block animated-hover bg-muted-custom">
                <IconContainer iconName={"FiZap"} color="var(--muted-light)" />
              </div>
              <div>
                <span
                  className={
                    activeRoute === "/clients"
                      ? "text-x-x-sm-custom text-info-custom fw-bold"
                      : "text-x-x-sm-custom"
                  }
                >
                  Clients
                </span>
              </div>
            </div>
          </Link>
        ) : null}

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
