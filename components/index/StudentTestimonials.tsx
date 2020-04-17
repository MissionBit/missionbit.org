import * as React from "react";

export interface StudentTestimonial {
  name: React.ReactNode;
  program: React.ReactNode;
  quote: React.ReactNode;
  photo: string;
}

export const testimonials: readonly StudentTestimonial[] = [
  {
    name: "Alyssa",
    program: "Fall 2019",
    quote: (
      <>
        I took my first class at Mission Bit as a sophomore without knowing much
        about computer science. Since joining the Mission Bit community, I have
        gained more experience and exposure to coding as well as getting the
        chance to work with lots of great people. Mission Bit has played a big
        part in this journey, and has given me plenty of perspective on what
        it's like in the tech industry.
      </>
    ),
    photo: "/images/students/alyssa.jpg",
  },
  {
    name: "Vincent",
    program: "Fall 2019",
    quote: (
      <>
        I am a sophomore at Galileo High School. When I first heard of Mission
        Bit I thought it was a great opportunity to get more advanced in coding.
        I tried the program and I loved it. After joining and now still being
        enrolled it has made me more passionate about coding. I want to go into
        the CS field and I hope to become a software engineer. The community is
        also very friendly and dedicated. I would recommend MB to anyone
        interested in coding.
      </>
    ),
    photo: "/images/students/vincent.jpg",
  },
  {
    name: "Nicholas",
    program: "Fall 2018",
    quote: (
      <>
        I live with my mom in the Tenderloin. I love to laugh, play video games,
        and I love to code. Mission Bit has given me an opportunity to make
        friends that look like me and share the same interest. I want to become
        either a professional gamer or software engineer.
      </>
    ),
    photo: "/images/students/nicholas.jpg",
  },
  {
    name: "Abel",
    program: "Fall 2018",
    quote: (
      <>
        It’s been a problem that we don’t have access to computer science
        education, thus, we can’t be the software engineers who solve problems
        for people like ourselves. So it’s important to get more undeserved
        students into tech and coding classes so they can solve problems that
        are meaningful to them and create the change that they want to see.
      </>
    ),
    photo: "/images/students/abel.jpg",
  },
  {
    name: "Eric",
    program: "Fall 2018",
    quote: (
      <>
        Because of Mission Bit, I believe in my ability to become an
        entrepreneur in the tech industry. I want to start a company in my
        neighborhood, Bayview Hunters Point.
      </>
    ),
    photo: "/images/students/eric.jpg",
  },
  {
    name: "Gisela",
    program: "Spring 2014",
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
    photo: "/images/students/gisela.jpg",
  },
];
