import * as React from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Carousel from "../Carousel";
import { useMemo } from "react";
import {
  ThemeOptions,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import { brand } from "../../src/colors";
import { StudentTestimonial, testimonials } from "./StudentTestimonials";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100vh",
    maxHeight: "var(--document-height, 100vh)",
  },
  testimonial: {
    width: "100%",
    display: "flex",
    flex: "1 0 100%",
    flexDirection: "column",
    padding: theme.spacing(3),
    scrollSnapAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 0, 0, 0),
    },
    "--accent-color": brand.orange,
    "&:nth-child(even)": {
      "--accent-color": brand.ultra,
    },
  },
  title: {
    alignSelf: "flex-start",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(0, 1),
    },
  },
  name: {
    ...theme.typography.h3,
    color: `var(--accent-color, ${brand.orange})`,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  program: {
    ...theme.typography.h4,
    color: theme.palette.common.white,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  photoQuote: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  photo: {
    display: "flex",
    flex: "1",
    [theme.breakpoints.up("md")]: {
      maxWidth: "60%",
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "calc(100vw * 0.667)",
      height: "calc(100vw * 0.667)",
      width: "100%",
      marginRight: 0,
    },
    "& > img": {
      objectFit: "contain",
      width: "100%",
    },
  },
  quote: {
    ...theme.typography.h5,
    display: "flex",
    position: "relative",
    alignSelf: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
      margin: `auto 0`,
      padding: theme.spacing(3, 1),
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 445,
      padding: theme.spacing(3),
    },
  },
  brQuote: {
    position: "absolute",
    right: "0",
    bottom: "0",
    transform: "translate(40%, 40%) scale(2)",
    color: `var(--accent-color, ${brand.orange})`,
    [theme.breakpoints.down("sm")]: {
      transform: "translate(-20%, -10%) scale(1)",
    },
  },
  tlQuote: {
    position: "absolute",
    left: "0",
    top: "0",
    transform: "translate(-40%, -40%) scale(-2)",
    color: `var(--accent-color, ${brand.orange})`,
    [theme.breakpoints.down("sm")]: {
      transform: "scale(-1)",
    },
  },
}));

const themeOverrides = (theme: Theme): ThemeOptions => ({
  ...theme,
  palette: {
    type: "dark",
    background: {
      paper: brand.royal,
    },
    primary: theme.palette.primary,
  },
});

const Students: React.FC<{}> = () => {
  const defaultTheme = useTheme();
  const theme = useMemo(() => createMuiTheme(themeOverrides(defaultTheme)), [
    defaultTheme,
  ]);

  const classes = useStyles();
  const Testimonial: React.FC<StudentTestimonial> = ({
    name,
    program,
    quote,
    photo,
    photoWebp,
    width,
    height,
  }) => (
    <div className={classes.testimonial}>
      <div className={classes.title}>
        <span className={classes.name}>{name} </span>
        <span className={classes.program}>{program}</span>
      </div>
      <div className={classes.photoQuote}>
        <picture className={classes.photo}>
          <source type="image/webp" srcSet={photoWebp} />
          <img
            alt={`Photo of ${name}`}
            src={photo}
            data-width={width}
            data-height={height}
          />
        </picture>
        <div className={classes.quote}>
          {quote}
          <FormatQuoteIcon className={classes.tlQuote} />
          <FormatQuoteIcon className={classes.brQuote} />
        </div>
      </div>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Carousel classes={{ root: classes.section }} id="testimonials">
        {testimonials.map((testimonial, idx) => (
          <Testimonial key={idx} {...testimonial} />
        ))}
      </Carousel>
    </ThemeProvider>
  );
};

export default Students;
