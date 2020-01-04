import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/app";
import store from "./store";

import * as serviceWorker from "./serviceWorker";

window.store = store;

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
