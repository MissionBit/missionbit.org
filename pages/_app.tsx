// import * as React from "react";
import App from "next/app";
import Router from "next/router";
import smoothscroll from "smoothscroll-polyfill";
import { pageview } from "components/GoogleAnalytics";

if (typeof window !== "undefined") {
  smoothscroll.polyfill();
}

Router.events.on("routeChangeComplete", pageview);

export default App;
