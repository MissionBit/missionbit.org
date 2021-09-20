import * as React from "react";

const SPEAKER_TYPES = ["Keynote", "Welcome Address"] as const;
type SpeakerType = typeof SPEAKER_TYPES[number];

export interface SpeakerProps {
  name: string;
  title: string;
  type: SpeakerType;
  id: string;
  image: { jpg: string; webp: string; srcSet: string };
  bio: React.ReactNode;
}

function image(postfix: string): Pick<SpeakerProps, "image"> {
  const jpg = require(/* webpackInclude: /\.jpg$/ */ `public/images/gala/speakers/${postfix}.jpg?resize&sizes[]=250&sizes[]=500&sizes[]=1000`);
  const webp = require(/* webpackInclude: /\.jpg$/ */ `public/images/gala/speakers/${postfix}.jpg?resize&sizes[]=250&sizes[]=500&sizes[]=1000&format=webp`);
  return {
    image: {
      jpg: jpg.src,
      srcSet: jpg.srcSet,
      webp: webp.srcSet,
    },
  };
}

const SpeakerData: readonly SpeakerProps[] = [
  {
    id: "mustafa-shakur",
    name: "Mustafa Shakur",
    title: "Co-Founder of United Tech Cities",
    type: "Keynote",
    ...image("mustafa-shakur"),
    bio: (
      <>
        Mustafa Shakur is a former professional basketball player of 12 years in
        the NBA and Europe. He is a graduate of the University of Arizona and a
        4-year letter winner at his Alma Mater. He is a service driven investor
        in real estate and elderly care. He is Co-Owner of Executive Care’s
        Montgomery County (PA) location, which services the elderly and ill in
        the surrounding Philadelphia area in which he was born and raised.
        <br />
        <br />
        Mustafa is the driving force behind the founding of United Tech Cities.
        United Tech Cities allows Mustafa to blend his passion for the
        community, housing, and education to create better opportunities for our
        youth and for underserved communities.
        <br />
        <br />
        Prior to retirement and relocation to Oakland, CA, Mustafa acted as
        founder of P.O.T.S. Foundation in Philadelphia, Pa. A Non-Profit
        dedicated to bringing additional resources and education to student
        athletes. Mustafa also serves as Ambassador &amp; a strategic planner
        for Non-Profit Urban Youth Racing School (Philadelphia, PA) since 2012.
        UYRS focuses on STEM education and Mentorship.
      </>
    ),
  },
  /*
  {
    id: "london-breed",
    name: "Mayor London Breed",
    title: "45th Mayor of the City and County of San Francisco",
    type: "Welcome Address",
    ...image("london-breed"),
    bio: (
      <>
        Mayor London Breed is a native San Franciscan, raised by her grandmother
        in Plaza East Public Housing in the Western Addition. She graduated with
        honors from Galileo High School. In June 2018, Mayor Breed was elected
        to be the first African American woman and second woman in San Francisco
        history to serve as Mayor. She was re-elected for her first full
        four-year term in November 2019.
        <br />
        <br />
        She has focused on helping the City’s homeless population into care and
        shelter; adding more housing for residents of all income levels; helping
        those suffering from mental health and substance use disorder on San
        Francisco’s streets; ensuring that all San Franciscans have access to a
        thriving economy; making San Francisco a cleaner and safer city; and
        furthering San Francisco’s leadership in combating climate change.
        <br />
        <br />
        Prior to public service, Mayor Breed served as Executive Director of the
        African American Art &amp; Culture Complex in the Western Addition for
        over a decade. She also served as a San Francisco Redevelopment Agency
        Commissioner and in 2010 was appointed by then-Mayor Gavin Newsom to be
        a San Francisco Fire Commissioner, where she served until her election
        to the Board of Supervisors.
        <br />
        <br />
        In 2013, Mayor Breed was elected to the San Francisco Board of
        Supervisors, representing District 5 for six years, including three
        years as President of the Board.
      </>
    ),
  },
  */
];

export default SpeakerData;
