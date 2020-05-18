import * as React from "react";
import Faq from "./Faq";
import Volunteers from "./Volunteers";
import VolunteerTestimonial from "./VolunteerTestimonial";
import FlourishSeparator from "components/programs/FlourishSeparator";
import Donate from "./Donate";

const Main: React.FC<{}> = () => {
  return (
    <main id="main">
      <Volunteers />
      <VolunteerTestimonial />
      <Faq />
      <FlourishSeparator />
      <Donate />
    </main>
  );
};

export default Main;
