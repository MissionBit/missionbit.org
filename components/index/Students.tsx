import * as React from "react";
import Carousel from "components/Carousel";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { brand } from "src/colors";
import FormatQuoteIcon from "components/icons/FormatQuote";
import { StudentTestimonial, testimonials } from "./StudentTestimonials";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import globalTheme, { theme } from "src/theme";

const useStyles = makeStyles((theme) => {
  const paddingTop = theme.spacing(2);
  const titleHeight = 39 + theme.spacing(2);
  const ulHeight = 16 + theme.spacing(4 * 2);
  const quoteHeight = 252;
  const photoHeightMaxP = `calc(100vh - ${
    paddingTop + titleHeight + ulHeight + quoteHeight
  }px)`;
  const photoHeightMaxL = `calc(100vh - ${
    paddingTop + titleHeight + ulHeight
  }px)`;
  const portraitQ = "(max-aspect-ratio:1/1)";
  const landscapeQ = "(min-aspect-ratio:1/1)";
  const mediaSmallTextP = `@media (max-width:727.95px) and ${portraitQ}`;
  const mediaSmallTextL = `@media (max-height:727.95px) and ${landscapeQ}`;
  const smallTextSel = (styles: CSSProperties) => ({
    [mediaSmallTextP]: styles,
    [mediaSmallTextL]: styles,
  });
  const mediaPortrait = `@media ${portraitQ}`;

  return {
    section: {
      height: "100vh",
      maxHeight: "var(--document-height, 100vh)",
    },
    testimonial: {
      width: "100%",
      display: "flex",
      flex: "1 0 100%",
      flexDirection: "row",
      padding: theme.spacing(3),
      scrollSnapAlign: "center",
      ...smallTextSel({
        padding: theme.spacing(1, 0, 0, 0),
      }),
      [mediaPortrait]: {
        flexDirection: "column",
        padding: theme.spacing(1, 0, 0, 0),
      },
      "--accent-color": brand.orange,
      "&:nth-child(even)": {
        "--accent-color": brand.carnation,
      },
    },
    title: {
      ...theme.typography.body1,
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(0, 1, 1, 1),
    },
    name: {
      color: `var(--accent-color, ${brand.orange})`,
      fontSize: theme.typography.pxToRem(53),
      ...smallTextSel({
        fontSize: theme.typography.h4.fontSize,
      }),
    },
    program: {
      display: "inline-block",
      color: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(33),
      ...smallTextSel({
        fontSize: theme.typography.h5.fontSize,
      }),
    },
    photoTitle: {
      display: "flex",
      position: "relative",
      flexDirection: "column",
      flex: "1",
    },
    photo: {
      display: "flex",
      flex: "1",
      maxHeight: photoHeightMaxL,
      [mediaPortrait]: {
        maxHeight: photoHeightMaxP,
        maxWidth: "100%",
        width: "100%",
        marginRight: 0,
      },
      "& > img": {
        objectFit: "contain",
        width: "100%",
      },
    },
    quote: {
      ...theme.typography.body1,
      fontSize: theme.typography.pxToRem(23),
      fontWeight: theme.typography.fontWeightMedium,
      display: "flex",
      flex: "1",
      position: "relative",
      alignSelf: "center",
      alignItems: "center",
      padding: `6.25rem 2rem 1rem 2rem`,
      marginBottom: "1rem",
      width: "50%",
      minWidth: 360,
      [mediaPortrait]: {
        paddingTop: "1rem",
        width: "100%",
        minWidth: "100%",
        maxWidth: "100%",
      },
      ...smallTextSel({
        fontSize: theme.typography.pxToRem(14),
        margin: `auto 0`,
        padding: theme.spacing(3, 1),
      }),
    },
    quoteWrapper: {
      position: "relative",
    },
    tlQuote: {
      position: "absolute",
      left: "0",
      top: "0",
      transform: "translate(-1rem, -2rem) scale(-2)",
      color: `var(--accent-color, ${brand.orange})`,
      ...smallTextSel({
        transform: "translate(-0.5rem, -1.5rem) scale(-1)",
      }),
    },
    brQuote: {
      position: "absolute",
      right: "0",
      bottom: "0",
      transform: "translate(1rem, 2rem) scale(2)",
      color: `var(--accent-color, ${brand.orange})`,
      ...smallTextSel({
        transform: "translate(0.5rem, 1.5rem) scale(1)",
      }),
    },
  };
});

const studentsTheme = createTheme({
  ...globalTheme,
  palette: {
    type: "dark",
    background: {
      paper: brand.indigo,
    },
    primary: theme.palette.primary,
  },
});

const Testimonial: React.FC<StudentTestimonial> = ({
  name,
  program,
  quote,
  photos,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.testimonial}>
      <div className={classes.photoTitle}>
        <div className={classes.title}>
          <span className={classes.name}>{name} </span>
          <span className={classes.program}>{program}</span>
        </div>
        <picture className={classes.photo}>
          <source
            type="image/webp"
            srcSet={[
              `${photos[""].webp} 2048w`,
              `${photos["@0.75x"].webp} 1536w`,
              `${photos["@0.5x"].webp} 1024w`,
              `${photos["@0.25x"].webp}`,
            ].join(",")}
          />
          <img
            alt={name}
            src={photos["@0.25x"].jpg}
            srcSet={[
              `${photos[""].jpg} 2048w`,
              `${photos["@0.75x"].jpg} 1536w`,
              `${photos["@0.5x"].jpg} 1024w`,
              `${photos["@0.25x"].jpg}`,
            ].join(",")}
          />
        </picture>
      </div>
      <div className={classes.quote}>
        <div className={classes.quoteWrapper}>
          {quote}
          <FormatQuoteIcon classes={{ root: classes.tlQuote }} />
          <FormatQuoteIcon classes={{ root: classes.brQuote }} />
        </div>
      </div>
    </div>
  );
};

const StudentsCarousel: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Carousel classes={{ root: classes.section }} id="testimonials">
      {testimonials.map((testimonial, idx) => (
        <Testimonial key={idx} {...testimonial} />
      ))}
    </Carousel>
  );
};

const Students: React.FC<{}> = () => (
  <ThemeProvider theme={studentsTheme}>
    <StudentsCarousel />
  </ThemeProvider>
);

export default Students;
