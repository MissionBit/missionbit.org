import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import VioletButton from "components/VioletButton";
import { brand } from "src/colors";
import RectImage from "components/RectImage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    padding: 0,
    gridGap: theme.spacing(4),
    gridTemplateColumns: "2fr 3fr",
    gridTemplateRows: "auto",
    gridTemplateAreas: `
      "photo title"
      "photo info"
    `,
    [theme.breakpoints.between("sm", "md")]: {
      gridTemplateAreas: `
        "title title"
        "photo info"
      `,
    },
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
    padding: theme.spacing(0, 4),
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
    padding: theme.spacing(0, 4),
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: theme.typography.pxToRem(20),
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: theme.typography.pxToRem(24),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(14),
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
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(8, 0),
    },
  },
  image: {
    position: "relative",
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
}));

const Donate: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container id="donate" component="section" className={classes.root}>
      <Box className={classes.imageWrapper}>
        <RectImage
          src={require("public/images/get-involved/demo-day-students.jpg")}
          srcSet={[
            `${require("public/images/get-involved/demo-day-students@0.5x.jpg")} 364w`,
            `${require("public/images/get-involved/demo-day-students.jpg")} 726w`,
          ].join(",")}
          srcSetWebP={[
            `${require("public/images/get-involved/demo-day-students@0.5x.jpg?webp")} 364w`,
            `${require("public/images/get-involved/demo-day-students.jpg?webp")} 726w`,
          ].join(",")}
          width={608.5}
          height={745.5}
          left={-107}
          top={-174}
          right={107}
          bottom={-275.5}
          id="donate-students"
          desc="Students at Demo Day"
          className={classes.image}
          fill={brand.indigo}
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
