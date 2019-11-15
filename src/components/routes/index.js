import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../pages/index";
import Login from "../../pages/login";

export const Routes = () => (
  <Switch>
    {/* exact - точное совпадение */}
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
  </Switch>
);

export default Routes;
