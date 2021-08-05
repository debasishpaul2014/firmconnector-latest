import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ContactComponent from "../../../components/ContactUsComponent/ContactComponent";
import Layout from "../../../components/Layouts/WithoutAuth/Layout";

const ContactUsScreen = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout pageTitle={"FirmConnector :: Contact Us"}>
      <ContactComponent />
    </Layout>
  );
};

export default ContactUsScreen;
