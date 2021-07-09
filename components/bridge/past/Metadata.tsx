import * as React from "react";
import Head from "next/head";
import BridgeCalendarEvent from "../BridgeDates";
import absoluteUrl from "src/absoluteUrl";
import oneLine from "src/oneLine";
import htmlEscapeJsonString from "src/htmlEscapeJsonString";

export const title = "Bridging the Youth Tech Divide";
export const description = oneLine`
Bridging the Youth Tech Divide, a free conference led by SF youth for
SF youth, seeking to inspire attendees to explore the potential and
possibility of a tech career.
`;
export const pageImage = "/images/bridge/social/bytd-logo.png";
export const registerUrl = "https://www.tfaforms.com/4835468";

export const Metadata: React.FC<{}> = () => {
  const metadata = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: title,
    startDate: BridgeCalendarEvent.start,
    endDate: BridgeCalendarEvent.end,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: "https://www.missionbit.org/bridge",
    },
    image: [absoluteUrl(pageImage)],
    description,
    offers: {
      "@type": "Offer",
      url: registerUrl,
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    organizer: {
      "@type": "Organization",
      name: "Mission Bit",
      url: "https://www.missionbit.org",
    },
  };
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: htmlEscapeJsonString(JSON.stringify(metadata)),
        }}
      />
    </Head>
  );
};

export default Metadata;
