import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRouteWithoutAuth({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
}

export default ProtectedRouteWithoutAuth;
