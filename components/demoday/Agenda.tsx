import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "src/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: brand.indigo,
    color: theme.palette.common.white,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "3fr 4fr",
    gridGap: theme.spacing(4),
    padding: theme.spacing(8, 0),
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr 2fr",
      gridGap: theme.spacing(4, 2),
      padding: theme.spacing(6, 0),
    },
  },
  title: {
    gridColumn: "1 / 3",
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(70),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },
  time: {
    textAlign: "right",
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(32),
    lineHeight: 1.5,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  copy: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(32),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
}));

const AgendaItem: React.FC<{ time: string }> = ({ time, children }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.time} variant="h3">
        {time}
      </Typography>
      <Typography className={classes.copy}>{children}</Typography>
    </>
  );
};

const Agenda: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="agenda" className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h2" align="center">
          Agenda
        </Typography>
        <AgendaItem time="11:00 AM">
          Introductions from Mission Bit staff
        </AgendaItem>
        <AgendaItem time="11:15 AM">Student presentations</AgendaItem>
        <AgendaItem time="11:45 AM">Explore student projects</AgendaItem>
        <AgendaItem time="12:45 PM">
          Winners announced &amp; closing remarks
        </AgendaItem>
      </Container>
    </Box>
  );
};

export default Agenda;
