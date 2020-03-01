import * as React from "react";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

import styles from "./Students.module.css";

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

const Testimonial: React.SFC<StudentTestimonial> = ({
  name,
  program,
  quote,
  photo
}) => (
  <div className={styles.testimonial}>
    Student
    <div>
      <span>{name}</span> <span>{program}</span>
    </div>
    <div>
      <img src={photo} alt={`Photo of ${name}`} />
    </div>
    <div>{quote}</div>
  </div>
);

const Students: React.SFC<{}> = () => {
  const [selected, setSelected] = useState(0);
  const wrapperRef: React.MutableRefObject<HTMLDivElement | null> = useRef(
    null
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
    <section className={styles.section}>
      <div className={styles.scroller} ref={wrapperRef}>
        <div
          className={styles.wrapper}
          style={{ width: `${testimonials.length * 100}vw` }}
        >
          {testimonials.map((testimonial, idx) => (
            <Testimonial key={idx} {...testimonial} />
          ))}
        </div>
      </div>
      <ul className={styles.ul}>
        {testimonials.map((_, idx) => (
          <li
            key={idx}
            data-key={idx}
            className={clsx({ [styles.selected]: idx === selected })}
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
