import axios from "axios";

//IMPORT API ROUTE URL
import { UPDATE_PROFILE_CONTACT_INFO } from "./apiRoutes";

const updateProfileContactInfo = (data) => {
  var postData = new FormData();

  postData.append("user_slug", data.userSlug);
  postData.append("contact_email", data.contactEmail);
  postData.append("phone", data.phone);
  postData.append("office_phone", data.officePhone);

  return axios
    .post(UPDATE_PROFILE_CONTACT_INFO, postData)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export default updateProfileContactInfo;
