import React from "react";
import ReactDOM from "react-dom";
// packages import
import { Router } from "react-router-dom";
// component imports
import App from "./App";
import history from "./helpers/history";
// css imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <Router forceRefresh history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
