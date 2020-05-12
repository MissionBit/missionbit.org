// import * as React from "react";
import App from "next/app";
import Router from "next/router";

import { pageview } from "components/GoogleAnalytics";

Router.events.on("routeChangeComplete", pageview);

export default App;
