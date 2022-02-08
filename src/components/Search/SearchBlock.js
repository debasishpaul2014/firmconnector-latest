import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import SearchTopBlock from "./SearchTopBlock";
import SearchBottomBlock from "./SearchBottomBlock";

const SearchBlock = () => {
  const { userDetails } = useAuthContext();
  const user_slug = JSON.parse(userDetails).user_slug;

  return (
    <div className="d-block">
      <SearchTopBlock user_slug={user_slug} />
      <SearchBottomBlock user_slug={user_slug} />
    </div>
  );
};

export default SearchBlock;
