import * as React from "react";
import Head from "next/head";
import GalaCalendarEvent, { galaLocation } from "./GalaDates";
import absoluteUrl from "src/absoluteUrl";
import oneLine from "src/oneLine";
import htmlEscapeJsonString from "src/htmlEscapeJsonString";

export const title = "Mission Bit – 2021 Mission Bit Gala";
export const description = oneLine`
Mission Bit's Fifth Annual Gala is a celebration of eight years of growth,
impact, and learning. Join us for this inspiring event, meet our students,
hear their stories, and help us reach our 2022 goals!
`;
export const pageImage = "/images/gala/2020-poster-save-the-date.jpg";
export const registerUrl =
  "https://www.eventbrite.com/e/mission-bit-4th-annual-virtual-gala-tickets-118229304031";
export const eventId = "118229304031";
export const pageUrl = "https://www.missionbit.org/gala";
export const price = "150";

export const Metadata: React.FC<{}> = () => {
  const metadata = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: title,
    startDate: GalaCalendarEvent.start,
    endDate: GalaCalendarEvent.end,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      address: galaLocation,
      url: pageUrl,
    },
    image: [absoluteUrl(pageImage)],
    description,
    offers: {
      "@type": "Offer",
      url: registerUrl,
      price,
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
