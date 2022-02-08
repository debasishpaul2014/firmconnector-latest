import axios from "axios";

//IMPORT API ROUTE URL
import { GET_SEARCH_RESULT } from "./apiRoutes";

const getSearchResult = (keyword) => {
  var postData = new FormData();

  postData.append("keyword", keyword);

  return axios
    .post(GET_SEARCH_RESULT, postData)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export default getSearchResult;
