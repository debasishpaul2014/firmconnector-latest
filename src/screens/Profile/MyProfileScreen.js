import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import Layout from "../../components/Layouts/WithAuth/Layout";

//import specific my profile component
import FirmOwnerScreen from "../../components/MyProfile/FirmOwnerProfile/FirmOwnerScreen";

const MyProfileScreen = () => {
  const { userDetails } = useAuthContext();
  const user_primary_role = JSON.parse(userDetails).user_primary_role;

  const displayMyProfileOnRoleBasis = () => {
    if (user_primary_role === "1") {
      return <FirmOwnerScreen />;
    }
  };

  return <Layout>{displayMyProfileOnRoleBasis()}</Layout>;
};

export default MyProfileScreen;
