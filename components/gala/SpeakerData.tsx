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
  const jpg = require(`public/images/gala/speakers/${postfix}.jpg?resize&sizes[]=250&sizes[]=500&sizes[]=1000`);
  const webp = require(`public/images/gala/speakers/${postfix}.jpg?resize&sizes[]=250&sizes[]=500&sizes[]=1000&format=webp`);
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
  {
    id: "michael-tubbs",
    name: "Mayor Michael D. Tubbs",
    title: "Mayor of Stockton, CA",
    type: "Keynote",
    ...image("michael-tubbs"),
    bio: (
      <>
        On November 8, 2016, Michael Tubbs was elected to serve as the mayor of
        his hometown - Stockton, California. Upon taking office in January 2017,
        Mayor Tubbs became Stockton’s first African-American Mayor and the
        youngest mayor of any major city in America. Mayor Tubbs’ leadership
        paired with an ambitious progressive agenda has received national
        recognition. He has been recognized as one of Politico’s Top 50,
        Fortune’s 2018 Top "40 under 40," Forbes' 2018 list of the “30 Under
        30”, and received the John F. Kennedy New Frontier Award in 2019. In his
        first year, Mayor Tubbs secured $20 million to launch Stockton Scholars,
        a place-based scholarship that aims to dramatically increase the number
        of Stockton students entering and graduating from college. Mayor Tubbs
        also brought Advance Peace to Stockton, a data-driven program that works
        to reduce gun violence in communities. With an innovative public-private
        partnership supported by a $1 million grant, Tubbs launched the nation’s
        first-ever mayor-led guaranteed income pilot known as Stockton Economic
        Empowerment Demonstration (SEED). Based on the success of SEED, Tubbs’
        latest initiative is Mayors for a Guaranteed Income (MGI). MGI is a
        coalition of mayors advocating for a guaranteed income to ensure that
        all Americans have an income floor. Under his leadership Stockton has
        been named an All-America City three times, in 2018 was named the second
        most fiscally healthy city in the country, and homicides have been
        reduced by 40%.
        <br />
        <br />
        Before becoming mayor, Michael Tubbs earned a B.A. in Comparative
        Studies in Race &amp; Ethnicity and an M.A. in Policy, Leadership &amp;
        Organization studies from Stanford University with honors. He started
        his political career at age 22 when he was elected to serve as
        Stockton’s District 6 City Councilmember in 2012. While holding this
        position he founded the Reinvent South Stockton Coalition, a
        private-public-non-profit that aims to empower South Stockton residents
        to help eradicate cycles of intergenerational poverty. He was also a
        part of the council that led the city out of bankruptcy as Chair of the
        Audit and Legislative Committee. As a result of his dedication to
        innovative solutions to real problems, Tubbs has been a Fellow Hasso
        Plattner Institute of Design, known as the d.school, at Stanford, the
        Emerson Collective and MIT Media Lab. Mayor Tubbs is married to his
        Partner Anna Nti-Asare-Tubbs and is a proud new father as of 2019.
      </>
    ),
  },
];

export default SpeakerData;
