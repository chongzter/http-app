import Raven from "raven-js";

function init() {
  Raven.config(
    "https://cd3377baac644822919059ecb84909d1@o380971.ingest.sentry.io/5207588",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
