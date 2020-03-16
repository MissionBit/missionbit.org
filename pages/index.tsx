import { NextPage } from "next";
import * as React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import Layout from "../components/Layout";
import Landing from "../components/index/Landing";
import Index from "../components/index";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflowY: "hidden"
  },
  alerts: {
    flex: "1 0 auto",
    '& div[role="alert"]': {
      alignItems: "center"
    }
  }
}));

const Alerts: React.FC<{ className?: string }> = ({ className }) => {
  const isValid = () => {
    const reference = Date.parse("2020-05-21T00:00:00-07:00");
    return reference - Date.now() > 0;
  };
  const [open, setOpen] = useState(isValid);
  useEffect(() => setOpen(isValid()), []);
  return (
    <Collapse in={open} className={className}>
      <Alert severity="info" onClose={() => setOpen(false)}>
        Sign up for our Summer 2020 Bootcamp now! Deadline 5/20/20
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
