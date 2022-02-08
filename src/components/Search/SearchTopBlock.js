import React from "react";
import IconContainerLg from "../Iconcontainer/IconContainerLg";
import { useHistory } from "react-router-dom";

const SearchTopBlock = () => {
  const history = useHistory();

  return (
    <div className="d-flex p-3 justify-content-end align-items-center col-12 bg-white">
      <div onClick={() => history.goBack()} className="cursor-pointer">
        <IconContainerLg iconName={"FiXCircle"} color="var(--info-dark)" />
      </div>
    </div>
  );
};

export default SearchTopBlock;
