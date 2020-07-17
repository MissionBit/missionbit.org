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
    padding: theme.spacing(8, 0),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(6, 0),
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(70),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },
}));

const Judges: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="judges" className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h2" align="center">
          Judges
        </Typography>
      </Container>
    </Box>
  );
};

export default Judges;
