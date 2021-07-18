import React from "react";

import TopBannerComponent from "./TopBanner";
import SelectOrganizationComponent from "./SelectOrganizationComponent";
import ThirdBlock from "./ThirdBlock";
import FourthBlock from "./FourthBlock";

const HomeComponent = () => {
  return (
    <div>
      <TopBannerComponent />
      <SelectOrganizationComponent />
      <ThirdBlock />
      <FourthBlock />
    </div>
  );
};

export default HomeComponent;
