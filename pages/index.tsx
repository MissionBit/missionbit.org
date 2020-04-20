import { NextPage } from "next";
import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import Layout from "../components/Layout";
import Landing from "../components/index/Landing";
import Index from "../components/index";
import { SummerDates } from "../components/programs/ClassInstanceData";
import { ShortDateFormat } from "../src/dates";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  alerts: {
    flex: "1 0 auto",
    '& div[role="alert"]': {
      alignItems: "center",
    },
  },
}));

const Alerts: React.FC<{ className?: string }> = ({ className }) => {
  const deadline = SummerDates.registrationDeadline;
  const isValid = useCallback(() => deadline - Date.now() > 0, [deadline]);
  const [open, setOpen] = useState(isValid);
  useEffect(() => setOpen(isValid()), [isValid]);
  return (
    <Collapse in={open} className={className}>
      <Alert severity="info" onClose={() => setOpen(false)}>
        <Link color="inherit" underline="always" href="/programs">
          Sign up
        </Link>{" "}
        for our Online Summer 2020 Courses now! Deadline{" "}
        {ShortDateFormat.format(deadline)}
      </Alert>
    </Collapse>
  );
};

const Page: NextPage<{}> = () => {
  const classes = useStyles();
  return (
    <Layout
      title="Mission Bit"
      alerts={<Alerts className={classes.alerts} />}
      headerChildren={<Landing />}
      headerClassName={classes.header}
    >
      <Index />
    </Layout>
  );
};

export default Page;
