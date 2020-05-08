import * as React from "react";
import Link from "@material-ui/core/Link";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import { useEffect, useState } from "react";
import { SummerDates } from "../programs/ClassInstanceData";
import { ShortDateFormat } from "../../src/dates";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: "1 0 auto",
    '& div[role="alert"]': {
      borderRadius: 0,
      "& .MuiAlert-icon": {
        display: "none",
      },
      "& .MuiAlert-message": {
        width: "100%",
        fontWeight: theme.typography.fontWeightBold,
        textAlign: "center",
      },
    },
  },
}));

interface TimedAlert {
  hideBefore?: number;
  hideAfter?: number;
  content: React.ReactNode;
}

const timedAlerts: TimedAlert[] = [
  {
    hideAfter: SummerDates.registrationDeadline,
    content: (
      <>
        <Link color="inherit" href="/programs">
          <span style={{ textDecoration: "underline" }}>Sign up</span> for our
          Online Summer 2020 Courses now! Deadline{" "}
          {ShortDateFormat.format(SummerDates.registrationDeadline)}
        </Link>
      </>
    ),
  },
];

function firstAlert(now: number): React.ReactNode | undefined {
  return timedAlerts.find(
    ({ hideBefore, hideAfter }) =>
      (hideBefore === undefined || now >= hideBefore) &&
      (hideAfter === undefined || now <= hideAfter)
  )?.content;
}

const firstAlertNow = () => firstAlert(Date.now());

const Alerts: React.FC<{}> = () => {
  const classes = useStyles();
  const [alert, setAlert] = useState<React.ReactNode | undefined>(
    firstAlertNow
  );
  useEffect(() => setAlert(firstAlertNow()), []);
  return (
    <Collapse in={alert !== undefined} className={classes.root}>
      <Alert
        severity="info"
        variant="filled"
        color="warning"
        onClose={() => setAlert(undefined)}
      >
        {alert}
      </Alert>
    </Collapse>
  );
};

export default Alerts;
