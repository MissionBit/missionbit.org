import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "src/colors";
import JudgeData, { JudgeProps } from "./JudgeData";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: brand.indigo,
    color: theme.palette.common.white,
    padding: theme.spacing(8, 0),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(6, 0),
    },
  },
  container: {},
  title: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(70),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },
  judges: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  judge: {
    margin: theme.spacing(6, 4, 0),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
    },
  },
  judgeName: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium,
  },
  judgeImage: {
    margin: theme.spacing(1, "auto"),
    width: "100%",
    height: "auto",
    maxWidth: 150,
    "& img": {
      borderRadius: "50%",
    },
  },
  judgeTitle: {},
  judgeCompany: {},
}));

const Judge: React.FC<JudgeProps> = ({ name, image, title, company }) => {
  const classes = useStyles();
  return (
    <Box className={classes.judge} flexDirection="column">
      <Typography className={classes.judgeName}>{name}</Typography>
      <div className={classes.judgeImage}>
        <Image alt={name} src={image} />
      </div>
      <Typography className={classes.judgeTitle}>{title}</Typography>
      <Typography className={classes.judgeCompany}>{company}</Typography>
    </Box>
  );
};

const Judges: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="judges" className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h2" align="center">
          Judges
        </Typography>
      </Container>
      <Box className={classes.judges}>
        {JudgeData.map((props, i) => (
          <Judge key={i} {...props} />
        ))}
      </Box>
    </Box>
  );
};

export default Judges;
