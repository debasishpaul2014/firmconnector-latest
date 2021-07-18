import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const ResourceListingScreen = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1>This is ResourceListing screen</h1>
      <Link to={`${url}/details/2`}>Resource Details</Link>
    </div>
  );
};

export default ResourceListingScreen;
