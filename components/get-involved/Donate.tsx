import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import VioletButton from "components/VioletButton";
import { brand } from "src/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridGap: theme.spacing(2),
    gridTemplateColumns: "2fr 3fr",
    gridTemplateRows: "auto",
    gridTemplateAreas: `
      "photo title"
      "photo info"
    `,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "title"
        "photo"
        "info"
      `,
    },
  },
  title: {
    gridArea: "title",
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.5,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h3.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  info: {
    gridArea: "info",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(28),
    lineHeight: 1.75,
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(12),
    },
  },
  ol: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1rem",
    },
  },
  buttons: {
    margin: theme.spacing(4, 0),
    textAlign: "center",
  },
  button: {
    fontSize: theme.typography.pxToRem(25),
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  imageWrapper: {
    gridArea: "photo",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: theme.spacing(4),
      "&:before": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: "30%",
        backgroundColor: brand.indigo,
      },
    },
  },
  image: {
    position: "relative",
    width: "75%",
    height: "auto",
    objectFit: "contain",
  },
}));

const Donate: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container id="donate" component="section" className={classes.root}>
      <Box className={classes.imageWrapper}>
        <img
          src={require("public/images/get-involved/demo-day-students.jpg")}
          srcSet={[
            `${require("public/images/get-involved/demo-day-students.jpg")} 726w`,
            `${require("public/images/get-involved/demo-day-students@0.5x.jpg")}`,
          ].join(",")}
          alt="Students at Demo Day"
          className={classes.image}
        />
      </Box>
      <Typography variant="h2" component="h1" className={classes.title}>
        Your donation helps educate and equip students to pursue opportunities
        in tech.
      </Typography>
      <Typography className={classes.info} component="div">
        Your donation will help us:
        <ol className={classes.ol}>
          <li>Reach more students with our free programs</li>
          <li>
            Find and train Facilitators and Teachers for our Semester Courses
            and Summer Bootcamps
          </li>
          <li>Create a world-class curriculum for our classrooms</li>
          <li>Diversify the tech industry</li>
        </ol>
        <Box className={classes.buttons}>
          <VioletButton
            variant="contained"
            href="https://donate.missionbit.org/"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            className={classes.button}
          >
            Donate Now
          </VioletButton>
        </Box>
      </Typography>
    </Container>
  );
};

export default Donate;
