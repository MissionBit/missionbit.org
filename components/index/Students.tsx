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
  Theme
} from "@material-ui/core/styles";
import { brand } from "../../src/colors";

interface StudentTestimonial {
  name: React.ReactNode;
  program: React.ReactNode;
  quote: React.ReactNode;
  photo: string;
}

const testimonials: readonly StudentTestimonial[] = [
  {
    name: "Nicholas",
    program: "Fall 2018 Semester",
    quote: (
      <>
        I live with my mom in the Tenderloin. I love to laugh, play video games,
        and I love to code. Mission Bit has given me an opportunity to make
        friends that look like me and share the same interest. I want to become
        either a professional gamer or software engineer.
      </>
    ),
    photo: "/images/students/nicholas.jpg"
  },
  {
    name: "Abel",
    program: "Fall 2018 Semester",
    quote: (
      <>
        It’s been a problem that we don’t have access to computer science
        education, thus, we can’t be the software engineers who solve problems
        for people like ourselves. So it’s important to get more undeserved
        students into tech and coding classes so they can solve problems that
        are meaningful to them and create the change that they want to see.
      </>
    ),
    photo: "/images/students/nicholas.jpg"
  },
  {
    name: "Eric",
    program: "Fall 2018 Semester",
    quote: (
      <>
        Because of Mission Bit, I believe in my ability to become an
        entrepreneur in the tech industry. I want to start a company in my
        neighborhood, Bayview Hunters Point.
      </>
    ),
    photo: "/images/students/nicholas.jpg"
  },
  {
    name: "Gisella",
    program: "Spring 2014 Semester",
    quote: (
      <>
        I started as a student at Mission Bit when I was a sophomore at Lowell
        High School (San Francisco). I always struggled in math, but I loved the
        practical aspects of coding. After high school, I enrolled in a coding
        bootcamp and got an opportunity to teach coding overseas in Jordan. It’s
        so rewarding to return to Mission Bit as an educator and provide the
        same engaging experience that I received when I was a high school
        student.
      </>
    ),
    photo: "/images/students/nicholas.jpg"
  }
];

const useStyles = makeStyles(theme => ({
  section: {
    minHeight: "80vh",
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(min(100vh, 700px))",
      maxHeight: "100vh"
    }
  },
  testimonial: {
    width: "100%",
    display: "flex",
    flex: "1 0 100%",
    flexDirection: "column",
    padding: theme.spacing(3),
    scrollSnapAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: `${theme.spacing(1)}px 0 0 0`
    },
    "--accent-color": brand.orange,
    "&:nth-child(even)": {
      "--accent-color": brand.ultra
    }
  },
  title: {
    alignSelf: "flex-start",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
      padding: `0 ${theme.spacing(1)}px`
    }
  },
  name: {
    ...theme.typography.h3,
    color: `var(--accent-color, ${brand.orange})`,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
      display: "block"
    }
  },
  program: {
    ...theme.typography.h4,
    color: theme.palette.common.white,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize
    }
  },
  photoQuote: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center"
    }
  },
  photo: {
    display: "flex",
    flex: "1",
    maxWidth: "60%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      maxWidth: "initial",
      maxHeight: "calc(100vw * 0.667)",
      height: "calc(100vw * 0.667)",
      width: "100%"
    }
  },
  quote: {
    ...theme.typography.h5,
    padding: theme.spacing(3),
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
      borderRadius: 0,
      margin: `auto 0`,
      padding: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
      maxWidth: "initial"
    },
    position: "relative",
    display: "flex",
    alignItems: "center",
    maxWidth: 445
  },
  brQuote: {
    position: "absolute",
    right: "0",
    bottom: "0",
    transform: "translate(40%, 40%) scale(2)",
    color: `var(--accent-color, ${brand.orange})`,
    [theme.breakpoints.down("sm")]: {
      transform: "translate(-20%, -10%) scale(1)"
    }
  },
  tlQuote: {
    position: "absolute",
    left: "0",
    top: "0",
    transform: "translate(-40%, -40%) scale(-2)",
    color: `var(--accent-color, ${brand.orange})`,
    [theme.breakpoints.down("sm")]: {
      transform: "scale(-1)"
    }
  }
}));

const themeOverrides = (theme: Theme): ThemeOptions => ({
  palette: {
    type: "dark",
    background: {
      paper: brand.royal
    },
    primary: theme.palette.primary
  },
  typography: {
    button: theme.typography.button
  }
});

const Students: React.FC<{}> = () => {
  const defaultTheme = useTheme();
  const theme = useMemo(() => createMuiTheme(themeOverrides(defaultTheme)), [
    defaultTheme
  ]);

  const classes = useStyles();
  const Testimonial: React.FC<StudentTestimonial> = ({
    name,
    program,
    quote,
    photo
  }) => (
    <div className={classes.testimonial}>
      <div className={classes.title}>
        <span className={classes.name}>{name} </span>
        <span className={classes.program}>{program}</span>
      </div>
      <div className={classes.photoQuote}>
        <div
          title={`Photo of ${name}`}
          className={classes.photo}
          style={{
            backgroundImage: `url(${photo})`
          }}
        />
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
      <Carousel classes={{ root: classes.section }}>
        {testimonials.map((testimonial, idx) => (
          <Testimonial key={idx} {...testimonial} />
        ))}
      </Carousel>
    </ThemeProvider>
  );
};

export default Students;
