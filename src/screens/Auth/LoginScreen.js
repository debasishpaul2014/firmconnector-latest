import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Import component
import LoginComponent from "../../components/AuthComponent/LoginComponent";
import Layout from "../../components/Layouts/WithoutAuth/Layout";

const LoginScreen = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout pageTitle={"Firmconnector :: Login to your account"}>
      <LoginComponent />
    </Layout>
  );
};

export default LoginScreen;
