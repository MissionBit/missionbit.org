import * as React from "react";
import Link from "@material-ui/core/Link";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import { useState } from "react";
import { SummerDates } from "components/programs/ClassInstanceData";
import { ShortDateFormat } from "src/dates";
import { makeStyles, darken } from "@material-ui/core/styles";
import { brand } from "src/colors";
import { useRenderTime } from "components/BuildTimeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: "1 0 auto",
    '& div[role="alert"]': {
      borderRadius: 0,
      "& .MuiAlert-icon": {
        "& > *": {
          display: "none",
        },
        padding: 0,
        margin: 0,
        minWidth: theme.typography.pxToRem(48),
      },
      "&.MuiAlert-filledWarning": {
        backgroundColor: brand.violet,
        padding: 0,
      },
      "& .MuiAlert-action": {
        margin: 0,
        backgroundColor: darken(brand.violet, 0.2),
        padding: 0,
        "& > .MuiButtonBase-root": {
          height: "100%",
          minWidth: theme.typography.pxToRem(48),
        },
      },
      "& .MuiAlert-message": {
        display: "flex",
        width: "100%",
        fontWeight: theme.typography.fontWeightBold,
        textAlign: "center",
        padding: 0,
        "& > a": {
          padding: theme.spacing(1.75, 1),
          flex: 1,
        },
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
        <Link color="inherit" href="/programs" title="Sign Up!">
          Sign up for our Online Summer 2020 Courses now! Deadline{" "}
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

const Alerts: React.FC<{}> = () => {
  const classes = useStyles();
  const now = useRenderTime();
  const [closed, setClosed] = useState<boolean>(false);
  const alert = closed ? undefined : firstAlert(now);
  return (
    <Collapse in={alert !== undefined} className={classes.root}>
      <Alert
        severity="info"
        variant="filled"
        color="warning"
        onClose={() => setClosed(true)}
      >
        {alert}
      </Alert>
    </Collapse>
  );
};

export default Alerts;
