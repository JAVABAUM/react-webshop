import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from './firebase';

const Filter = ({ component: Component, ...rest }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    </>
  );
};

export default Filter;