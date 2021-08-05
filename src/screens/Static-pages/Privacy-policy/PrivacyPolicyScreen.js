import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import PrivacyComponent from "../../../components/PrivacyComponent/PrivacyComponent";
import Layout from "../../../components/Layouts/WithoutAuth/Layout";

const PrivacyPolicyScreen = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout pageTitle={"FirmConnector :: Privacy Policy"}>
      <PrivacyComponent />
    </Layout>
  );
};

export default PrivacyPolicyScreen;
