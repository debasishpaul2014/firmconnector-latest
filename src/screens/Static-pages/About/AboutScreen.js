import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AboutComponent from "../../../components/AboutComponent/AboutComponent";
import Layout from "../../../components/Layouts/WithoutAuth/Layout";

const AboutScreen = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout pageTitle={"FirmConnector :: About Us"}>
      <AboutComponent />
    </Layout>
  );
};

export default AboutScreen;
