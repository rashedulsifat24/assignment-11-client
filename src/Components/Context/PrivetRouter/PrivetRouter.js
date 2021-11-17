import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";

const PrivetRoute = ({ children, ...rest }) => {
  const { user,isLoding } = useAuth();
  if(isLoding){
    return <Spinner animation="border" variant="secondary" />
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
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
    ></Route>
  );
};

export default PrivetRoute;
