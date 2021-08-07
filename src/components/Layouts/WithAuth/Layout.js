import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header/Header";
import LeftMenuComponent from "./LeftMenu/LeftMenuComponent";
import Content from "./Content";

import "../../../assets/css/main.css";
import "../../../assets/css/color.css";
import "../../../assets/css/button.css";
import "./layout.css";

const Layout = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="d-block main-layout ms-5">
        <LeftMenuComponent />
        <div className="bg-muted d-block ms-2 ms-lg-4 ms-xl-4 ms-xxl-4">
          <Header />
          <div className="dashboard-main-section py-2 py-lg-5 py-xl-5 py-xxl-5">
            <Content>{props.children}</Content>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
