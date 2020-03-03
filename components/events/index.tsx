import * as React from "react";
import Typography from "@material-ui/core/Typography";

const Main: React.FC<{}> = () => {
  return (
    <main id="main">
      <Typography variant="h2" component="h1" align="center">
        Events
      </Typography>
      <section id="current"></section>
      <section id="past">
        <Typography variant="h2" align="center">
          Past Events
        </Typography>
      </section>
    </main>
  );
};

export default Main;
