// import * as React from "react";
import App from "next/app";
import Router from "next/router";
import smoothscroll from "smoothscroll-polyfill";
import { pageview } from "components/GoogleAnalytics";
import * as Sentry from "@sentry/browser";

if (typeof window !== "undefined") {
  smoothscroll.polyfill();
  Sentry.init({
    enabled: process.env.NODE_ENV === "production",
    dsn:
      "https://6ca28441da284613b31785b8fc80f743@o404841.ingest.sentry.io/5269525",
  });
}

Router.events.on("routeChangeComplete", pageview);

export default App;
