import * as React from "react";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { debounce } from "ts-debounce";

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
    width: "100%",
    display: "flex",
    flex: "1 0 100%",
    flexDirection: "column",
    padding: theme.spacing(3),
    alignItems: "center",
    justifyItems: "center",
    scrollSnapAlign: "center"
  },
  scroller: {
    display: "flex",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  ul: {
    display: "flex",
    listStyleType: "none",
    justifyContent: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    color: "#333",
    padding: "1rem",
    flex: "1",
    userSelect: "none"
  },
  li: {
    cursor: "pointer",
    color: theme.palette.common.white,
    margin: `0 ${theme.spacing(1)}px`
  },
  liSelected: {
    cursor: "initial",
    pointerEvents: "none",
    color: theme.palette.secondary.main
  },
  section: {
    backgroundColor: "#F5A362",
    overflowX: "hidden",
    position: "relative",
    minWidth: "100%"
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
    alignItems: "stretch",
    minHeight: 300
  },
  photo: {
    display: "flex",
    flex: "1",
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
    alignItems: "center"
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
  const [scrollWidth, setScrollWidth] = useState(0);
  const scrollerRef: React.MutableRefObject<HTMLDivElement | null> = useRef(
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

  useEffect(() => {
    const handleResize = debounce(
      () => {
        const { current } = scrollerRef;
        if (current !== null) {
          setScrollWidth(current.scrollWidth);
        }
      },
      100,
      { isImmediate: false }
    );
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  useEffect(() => {
    const { current } = scrollerRef;
    if (current !== null) {
      current.scrollTo({
        behavior: "smooth",
        left: selected * (current.scrollWidth / testimonials.length)
      });
    }
  }, [selected, scrollWidth, scrollerRef.current]);
  const selectClosest = () => {
    const { current } = scrollerRef;
    if (current === null) {
      return;
    }
    const children: HTMLElement[] = Array.from(current.children).filter(
      (x): x is HTMLElement => x instanceof HTMLElement
    );
    for (let i = 0; i < children.length; i++) {
      const el = children[i];
      const { x, width } = el.getBoundingClientRect();
      if (Math.abs(x) < 0.5 * width) {
        console.log({ setClosest: i, selected });
        setSelected(i);
        break;
      }
    }
  };
  useEffect(() => {
    const { current } = scrollerRef;
    if (current === null) {
      return;
    }
    const handleScroll = debounce(selectClosest, 100, { isImmediate: false });
    current.addEventListener("scroll", handleScroll);
    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [scrollerRef.current]);
  return (
    <section className={classes.section}>
      <div className={classes.scroller} ref={scrollerRef}>
        {testimonials.map((testimonial, idx) => (
          <Testimonial key={idx} {...testimonial} />
        ))}
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
            ⬤
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Students;
