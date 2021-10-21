import { API_BASE } from "../config/env";

const LOGIN_ROUTE = `${API_BASE}check-login`;
const SIGNUP_ROUTE = `${API_BASE}create-firm-account`;
const USER_PROFILE_ROUTE = `${API_BASE}get-profile-information`;
const USER_FIRM_DETAILS_ROUTE = `${API_BASE}get-user-firm-details`;
const FIRM_RESOURCE_MANAGER_COUNT = `${API_BASE}get-firm-resource-manager-count`;
const FIRM_RESOURCE_COUNT = `${API_BASE}get-firm-resource-count`;
const CREATE_MANGER_ROUTE = `${API_BASE}create-resource-manager-by-firm`;
const CREATE_RESOUCE_ROUTE = `${API_BASE}create-resource`;
const RESOURCE_MANAGER_RESOURCE_MANAGER_COUNT = `${API_BASE}get-resource-manager-resource-count`;
const CHECK_RESOURCE_EDIT_ACCESS = `${API_BASE}get-resource-edit-access`;
const UPDATE_PROFILE_BASIC_INFO = `${API_BASE}update-profile-basic-info`;
const UPDATE_PROFILE_CONTACT_INFO = `${API_BASE}update-profile-contact-info`;
const USER_AVATAR_UPLOAD = `${API_BASE}user-avatar-upload`;
const GET_MY_RESOURCE_LISTING = `${API_BASE}get-my-resource-listing`;

export {
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  USER_PROFILE_ROUTE,
  USER_FIRM_DETAILS_ROUTE,
  FIRM_RESOURCE_MANAGER_COUNT,
  FIRM_RESOURCE_COUNT,
  CREATE_MANGER_ROUTE,
  CREATE_RESOUCE_ROUTE,
  RESOURCE_MANAGER_RESOURCE_MANAGER_COUNT,
  CHECK_RESOURCE_EDIT_ACCESS,
  UPDATE_PROFILE_BASIC_INFO,
  UPDATE_PROFILE_CONTACT_INFO,
  USER_AVATAR_UPLOAD,
  GET_MY_RESOURCE_LISTING,
};
