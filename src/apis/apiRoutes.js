import { API_BASE } from "../config/env";

const LOGIN_ROUTE = `${API_BASE}check-login`;
const SIGNUP_ROUTE = `${API_BASE}create-firm-account`;
const USER_PROFILE_ROUTE = `${API_BASE}get-profile-information`;
const USER_FIRM_DETAILS_ROUTE = `${API_BASE}get-user-firm-details`;
const FIRM_RESOURCE_MANAGER_COUNT = `${API_BASE}get-firm-resource-manager-count`;
const FIRM_RESOURCE_COUNT = `${API_BASE}get-firm-resource-count`;

export {
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  USER_PROFILE_ROUTE,
  USER_FIRM_DETAILS_ROUTE,
  FIRM_RESOURCE_MANAGER_COUNT,
  FIRM_RESOURCE_COUNT,
};
