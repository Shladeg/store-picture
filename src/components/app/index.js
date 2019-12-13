import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import "react-notifications/lib/notifications.css";

import Routes from "../routes";

import "./styles.css";

export const App = () => (
  <Router>
    <Routes />
    <NotificationContainer />
  </Router>
);

export default App;
