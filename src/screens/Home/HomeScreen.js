import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Import component
import HomeComponent from "../../components/HomeComponents/HomeComponent";
import Layout from "../../components/Layouts/WithoutAuth/Layout";

const HomeScreen = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout pageTitle={"Welcome to FirmConnector"}>
      <HomeComponent />
    </Layout>
  );
};

export default HomeScreen;
