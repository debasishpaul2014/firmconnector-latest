import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";

const EditResourceFormBlock = () => {
  const { userDetails } = useAuthContext();
  const user_slug = JSON.parse(userDetails).user_slug;

  useEffect(() => {
    if (user_slug) {
      getFirmEditAccess();
    }
  }, [user_slug]);

  const getFirmEditAccess = () => {};

  return <div></div>;
};

export default EditResourceFormBlock;
