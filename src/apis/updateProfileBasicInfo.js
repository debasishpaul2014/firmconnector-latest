import axios from "axios";

//IMPORT API ROUTE URL
import { UPDATE_PROFILE_BASIC_INFO } from "./apiRoutes";

const updateProfileBasicInfo = (data) => {
  var postData = new FormData();

  postData.append("user_slug", data.userSlug);
  postData.append("first_name", data.firstName);
  postData.append("last_name", data.lastName);

  return axios
    .post(UPDATE_PROFILE_BASIC_INFO, postData)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export default updateProfileBasicInfo;
