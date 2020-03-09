import * as React from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "../Carousel";

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
    minHeight: "80vh"
  },
  testimonial: {
    width: "100%",
    display: "flex",
    flex: "1 0 100%",
    flexDirection: "column",
    padding: theme.spacing(3),
    scrollSnapAlign: "center"
  },
  title: {
    alignSelf: "flex-start"
  },
  name: {
    ...theme.typography.h3,
    color: "#333",
    fontWeight: "bold"
  },
  program: {
    ...theme.typography.h4,
    color: "#666",
    fontWeight: "bold"
  },
  photoQuote: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "100%"
  },
  photo: {
    display: "flex",
    flex: "1",
    maxWidth: "60%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    marginRight: theme.spacing(3)
  },
  quote: {
    ...theme.typography.body1,
    flex: "1",
    padding: theme.spacing(3),
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
    color: "rgba(51,51,51,0.56)"
  },
  tlQuote: {
    position: "absolute",
    left: "0",
    top: "0",
    transform: "translate(-40%, -40%) scale(-2)",
    color: "rgba(51,51,51,0.56)"
  }
}));

const Students: React.FC<{}> = () => {
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
          style={{ backgroundImage: `url(${photo})` }}
        />
        <Paper className={classes.quote} elevation={0}>
          {quote}
          <FormatQuoteIcon className={classes.tlQuote} />
          <FormatQuoteIcon className={classes.brQuote} />
        </Paper>
      </div>
    </div>
  );

  return (
    <Carousel classes={{ section: classes.section }}>
      {testimonials.map((testimonial, idx) => (
        <Testimonial key={idx} {...testimonial} />
      ))}
    </Carousel>
  );
};

export default Students;
