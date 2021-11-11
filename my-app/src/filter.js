import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "./firebase";

const Filter = ({ component: Component, ...rest }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (true) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default Filter;
