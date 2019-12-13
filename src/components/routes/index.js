import React from "react";
import { useSelector, shallowEqual, connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../../pages/index";
import Login from "../../pages/login";
import Register from "../../pages/register";

export const Routes = ({ user }) => {
  const isAuthorized = user.isAuthorized;

  return (
    <Switch>
      {/* exact - точное совпадение */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        {isAuthorized ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/register">
        {isAuthorized ? <Redirect to="/" /> : <Register />}
      </Route>
    </Switch>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Routes);
