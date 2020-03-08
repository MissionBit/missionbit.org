import * as React from "react";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

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
  testimonial: {
    minWidth: "100vw",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: theme.spacing(3),
    padding: theme.spacing(3),
    alignItems: "center",
    justifyItems: "center",
    scrollSnapAlign: "center"
  },
  scroller: {
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    flexDirection: "row",
    overflowX: "scroll",
    scrollSnapType: "x mandatory"
  },
  ul: {
    display: "flex",
    listStyleType: "none",
    alignItems: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    color: "#333",
    padding: "1rem"
  },
  li: {
    cursor: "pointer",
    backgroundColor: "#111"
  },
  liSelected: {
    cursor: "initial",
    pointerEvents: "none",
    backgroundColor: "#F5A362"
  },
  section: {
    backgroundColor: "#F5A362",
    overflowX: "hidden",
    position: "relative",
    minWidth: "100%"
  },
  title: {
    justifySelf: "left",
    gridColumn: "span 2"
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
  quote: {
    ...theme.typography.body1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(3),
    position: "relative"
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
  const [selected, setSelected] = useState(0);
  const wrapperRef: React.MutableRefObject<HTMLDivElement | null> = useRef(
    null
  );
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
      <div>
        <img src={photo} alt={`Photo of ${name}`} />
      </div>
      <Paper className={classes.quote} elevation={0}>
        {quote}
        <FormatQuoteIcon className={classes.tlQuote} />
        <FormatQuoteIcon className={classes.brQuote} />
      </Paper>
    </div>
  );

  useEffect(() => {
    const { current } = wrapperRef;
    if (current !== null) {
      current.scrollTo({
        behavior: "smooth",
        left: selected * (current.scrollWidth / testimonials.length)
      });
    }
  }, [selected, wrapperRef.current]);
  return (
    <section className={classes.section}>
      <div className={classes.scroller} ref={wrapperRef}>
        <div
          className={classes.wrapper}
          style={{ width: `${testimonials.length * 100}vw` }}
        >
          {testimonials.map((testimonial, idx) => (
            <Testimonial key={idx} {...testimonial} />
          ))}
        </div>
      </div>
      <ul className={classes.ul}>
        {testimonials.map((_, idx) => (
          <li
            key={idx}
            data-key={idx}
            className={clsx(classes.li, {
              [classes.liSelected]: idx === selected
            })}
            onClick={event => {
              event.preventDefault();
              setSelected(idx);
            }}
          >
            *
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Students;
