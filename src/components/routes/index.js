import React from "react";
import { useSelector, shallowEqual, connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../../pages/index";
import Login from "../../pages/login";
import Register from "../../pages/register";

import PrivateRoute from "../private-route";

export const Routes = ({ user }) => {
  const isAuthenticated = user.isAuthenticated;

  return (
    <Switch>
      {/* exact - точное совпадение */}
      <PrivateRoute exact path="/">
        <Home />
      </PrivateRoute>
      <Route exact path="/login">
        {isAuthenticated ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/register">
        {isAuthenticated ? <Redirect to="/" /> : <Register />}
      </Route>
    </Switch>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Routes);
