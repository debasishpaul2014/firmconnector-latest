import React from "react";
import HeaderLg from "../Headers/HeaderLg";

const StaticPageHeaderComponent = (props) => {
  const { title, description_sm } = props;

  return (
    <div className="container py-5">
      <HeaderLg title={title} subText={description_sm} borderBottom={false} />
    </div>
  );
};

export default StaticPageHeaderComponent;
