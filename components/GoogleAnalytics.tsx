import * as React from "react";
import oneLine from "src/oneLine";

export const GA_TRACKING_ID = "UA-47473369-1";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  if (typeof window !== "undefined" && "gtag" in window) {
    window.gtag("config", GA_TRACKING_ID, {
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
  <>
    <link rel="dns-prefetch" href="https://www.google.com" />
    <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    <link rel="dns-prefetch" href="https://stats.g.doubleclick.net" />
    <link rel="dns-prefetch" href="https://i.ytimg.com" />
    <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: oneLine`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });
  `,
      }}
    />
  </>
);

export default GoogleAnalytics;
