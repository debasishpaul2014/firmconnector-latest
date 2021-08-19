import React from "react";
import { Route, Switch } from "react-router-dom";
import useLocationBlocker from "./LocationBlocker";

//Component for auth checking
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteWithoutAuth from "./ProtectedRouteWithoutAuth";

//Import all main route components
import HomeScreen from "../screens/Home/HomeScreen";

//Import Static pages
import AboutScreen from "../screens/Static-pages/About/AboutScreen";
import PrivacyPolicyScreen from "../screens/Static-pages/Privacy-policy/PrivacyPolicyScreen";
import PricingScreen from "../screens/Static-pages/Pricing/PricingScreen";
import ContactUsScreen from "../screens/Static-pages/Contact-us/ContactUsScreen";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";

//Import Resource pages
import ResourceListingScreen from "../screens/Resource/ResourceListingScreen";
import ResourceDetailsScreen from "../screens/Resource/ResourceDetailsScreen";

//Import Auth screens
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

//Error screen with type
import PageNotFound from "../screens/error/400/PageNotFound";

//Define main route to access on App.js
const MainRoute = () => {
  useLocationBlocker();

  return (
    <>
      <Switch>
        {/* Route for Static Pages */}
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/about-us" component={AboutScreen} />
        <Route exact path="/privacy-policy" component={PrivacyPolicyScreen} />
        <Route exact path="/pricing" component={PricingScreen} />
        <Route exact path="/contact-us" component={ContactUsScreen} />

        {/* Route for Login */}
        <ProtectedRouteWithoutAuth
          exact
          path={`/sign-in`}
          component={LoginScreen}
        />
        <ProtectedRouteWithoutAuth
          exact
          path={`/sign-up`}
          component={SignUpScreen}
        />

        {/* Route for Resource */}
        <ProtectedRoute
          exact
          path={`/resources`}
          component={ResourceListingScreen}
        />
        {/* <ProtectedRoute
          exact
          path={`/resources/details/:resourceId`}
          component={ResourceDetailsScreen}
        /> */}

        {/* Route for Dashboard */}
        <Route
          exact
          path={`/resources/details/:resourceId`}
          component={ResourceDetailsScreen}
        />

        {/* Route for Dashboard */}
        <Route exact path="/dashboard" component={DashboardScreen} />

        {/* Route for 404 */}
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default MainRoute;
