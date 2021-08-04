import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Import component
import SignupComponent from "../../components/AuthComponent/SignupComponent/SignupComponent";
import Layout from "../../components/Layouts/WithoutAuth/Layout";

const SignUpScreen = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout pageTitle={"Firmconnector :: Create your own account"}>
      <SignupComponent />
    </Layout>
  );
};

export default SignUpScreen;
