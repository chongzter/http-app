import React from "react";
import ReactDOM from "react-dom";
import Raven from "raven-js";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Raven.config(
  "https://cd3377baac644822919059ecb84909d1@o380971.ingest.sentry.io/5207588",
  {
    release: "1-0-0",
    environment: "development-test",
  }
).install();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
