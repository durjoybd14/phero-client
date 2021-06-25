import jwt_decode from "jwt-decode";
import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    localStorage.getItem(loggedInUser.email);
    const decodedToken = jwt_decode(token);
    const currentTime = new Date().getTime() / 1000;
    return decodedToken.exp > currentTime;
  };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
