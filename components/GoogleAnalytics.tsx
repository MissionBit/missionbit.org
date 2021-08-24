import Head from "next/head";
import * as React from "react";
import oneLine from "src/oneLine";

const GA_MEASUREMENT_ID = "G-HEJM8B05LS";
const ADWORDS_CONVERSION_ID = "AW-319322078";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  if (typeof window !== "undefined" && "gtag" in window) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}): void => {
  if (typeof window !== "undefined" && "gtag" in window) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const GoogleAnalytics: React.FC<{}> = () => (
  <Head>
    <link rel="dns-prefetch" href="https://www.google.com" />
    <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    <link rel="dns-prefetch" href="https://stats.g.doubleclick.net" />
    <link rel="dns-prefetch" href="https://i.ytimg.com" />
    <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: oneLine`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
    gtag('config', '${ADWORDS_CONVERSION_ID}');
  `,
      }}
    />
  </Head>
);

export default GoogleAnalytics;
