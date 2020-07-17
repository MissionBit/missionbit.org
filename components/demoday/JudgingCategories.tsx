import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {},
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(70),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },
}));

const JudgingCategories: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="judging" className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h2" align="center">
          Judging Categories
        </Typography>
      </Container>
    </Box>
  );
};

export default JudgingCategories;
