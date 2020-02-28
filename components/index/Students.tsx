import * as React from "react";

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

const Students: React.SFC<{}> = () => (
  <section className={styles.section}>
    {testimonials.map((testimonial, idx) => (
      <Testimonial key={idx} {...testimonial} />
    ))}
  </section>
);

export default Students;
