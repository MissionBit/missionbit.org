import * as React from "react";
import Landing from "./Landing";
import Faq from "./Faq";
import Volunteers from "./Volunteers";
import VolunteerTestimonial from "./VolunteerTestimonial";
import FlourishSeparator from "components/programs/FlourishSeparator";
import Donate from "./Donate";

const Main: React.FC<{}> = () => {
  return (
    <main id="main">
      <Landing />
      <Volunteers />
      <VolunteerTestimonial />
      <Faq />
      <FlourishSeparator />
      <Donate />
    </main>
  );
};

export default Main;
